const fs = require('fs')
const prompts = require('prompts');
const { execSync } = require('child_process')

const has_git_init = fs.existsSync('.git')
if (!has_git_init) {
    console.log('There is nothing to do here.')
    process.exit(0)
}

const current_repo = runCommandFromTerminal('git remote');
if (current_repo === '') {
    console.log('It is not possible to commit or push updates without set the remote url.')
    process.exit(0)
}

const current_branch = runCommandFromTerminal('git branch --show-current').replace('\n', '')
const tracked_files = runCommandFromTerminal('git ls-files --cached');
const untracked_files = runCommandFromTerminal('git ls-files -o -m -d --exclude-standard')

const untracked_files_list = untracked_files
    .split('\n')
    .filter(item => item !== '')
    .map(item => ({ title: item, value: item }))

const options = [
    {
        type: 'toggle',
        name: 'add_changes',
        message: 'add changes?',
        initial: true,
        active: 'yes',
        inactive: 'no'
    },
    {
        type: prev => prev && untracked_files_list.length > 0 ? 'multiselect' : undefined,
        name: 'changed_files',
        message: 'files to add:',
        choices: untracked_files_list,
        instructions: false,
        hint: 'press a to select/deselect all | space or ←/→ to toggle selection',
        min: 1
    },
    {
        type: 'select',
        name: 'type',
        message: 'type of task (required):',
        choices: [
            { title: 'feat', value: 'feat' },
            { title: 'fix', value: 'fix' },
            { title: 'chore', value: 'chore' },
            { title: 'docs', value: 'docs' },
            { title: 'refactor', value: 'refactor' },
            { title: 'style', value: 'style' },
            { title: 'test', value: 'test' },
            { title: 'other', value: 'other' },
        ],
        validate: type => type ? true : 'type of task is required'
    },
    {
        type: prev => prev === 'other' ? 'text' : undefined,
        name: 'type',
        message: 'set the type of task (required):',
        validate: type => type ? true : 'type of task is required'
    },
    {
        type: 'text',
        name: 'scope',
        message: 'scope of task (empty for no use):'
    },
    {
        type: 'text',
        name: 'description',
        message: 'description of commit (required):',
        validate: description => description ? true : 'description is required'
    },
    {
        type: 'text',
        name: 'body',
        message: 'body of commit (empty for no use, semicolon for break lines, max 3 lines): ',
    },
    {
        type: 'text',
        name: 'footer',
        message: 'footer of commit (empty for no use, one line): ',
    },
    {
        type: 'toggle',
        name: 'push_changes',
        message: `push changes to current branch (${current_branch})?`,
        initial: true,
        active: 'yes',
        inactive: 'no'
    },
];

exports = module.exports.run = async function () {
    const response = await prompts(options, {
        onCancel: () => {
            process.exit(0)
        }
    });

    const { add_changes, changed_files, type, scope, description, body, footer, push_changes } = response

    if (!add_changes && tracked_files === '') {
        console.log('It is not possible to commit without add changes.')
        return
    } else if (add_changes && changed_files && changed_files.length) {
        runCommandFromTerminal(`git add ${changed_files.join(' ')}`)
    }

    const commit_title = `-m "${type}${scope ? `(${scope})` : ''}: ${description}"`
    const commit_body = body.split(';').map(item => `-m "${item}"`).slice(0, 3).join(' ')
    const commit_footer = `-m "${footer}"`
    runCommandFromTerminal(`git commit ${commit_title} ${commit_body} ${commit_footer}`.trim())

    if (!push_changes) {
        console.log('Commit successfully. To check, just use the command "git log -i" in terminal.')
        return
    }

    runCommandFromTerminal(`git push origin ${current_branch}`)
}

function runCommandFromTerminal(command) {
    return execSync(command, { encoding: 'utf-8' })
}

