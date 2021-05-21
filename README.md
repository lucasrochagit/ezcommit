<h1 align="center">EzCommit</h1>
<p align="center">A simple tool to facilitate the commit process through the terminal.</p>

[![License][license-image]][license-url]
[![NPM Version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Releases][releases-image]][releases-url]
[![Contributors][contributors-image]][contributors-url]
[![Issues][issues-image]][issues-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

## Installing
Use the npm command to install this library globally
```shell 
npm i -g ezcommit 
```

## Usage Example

Run the follow command after finish your project updates:

```shell 
ezcommit
``` 

Some options will appear in the terminal so that you can set up your commit.
Whenever you select an option, use the `enter` key to confirm, or use the shortcut `ctrl + c` to end the flow.

```shell
√ add changes? ... no / yes
√ files to add: » .gitignore, package.json
√ type of task (required): » feat
√ scope of task (empty for no use): ... init
√ description of commit (required): ... add some nice resource
√ body of commit (empty for no use, semicolon for break lines, max 3 lines):  ... this is a nice resource
√ footer of commit (empty for no use, one line):  ... by: lucasrochacc
√ push changes to current branch (feat/do-something)? ... no / yes
```

Result:

```shell
feat(init): add some nice resource

this is a nice resource

by: lucasrochacc

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri May 21 15:35:35 2021 -0300
#
# On branch feat/do-something
```

### add changes

The first question is whether you want to add the changes made to the project. Choose `yes` or `no`.

```shell
? add changes? no / yes
```

If you choose `no`, you will be redirected to the [next step](#select-the-type-of-task). 

Otherwise, you will be directed to a multi-selection menu, which contains all new, modified or deleted files. 
You can select / deselect all options using the 'a' key or select / deselect a single option using space or
the `←/→`  keys.

```shell
? files to add: press a to select/deselect all | space or ←/→ to toggle selection
( )   .gitignore
( )   package.json
```

### select the type of task
After adding the commit files, select the type of task you are working on. If your task is on the list, just 
select your option, and you will be directed to the [next step](#scope-of-the-task). 

```shell
? type of task (required): - Use arrow-keys. Return to submit.
> feat
  fix
  chore
  docs
  refactor
  style
  test
  other
```

Otherwise, choose the option
`others`, and you will be taken to the step of filling in the name of the task, just enter the name and continue.
```shell
? set the type of task (required):
```


### scope of the task
After selecting the type of task, you will be redirected to the step of filling the scope of the task. This 
parameter is optional, if you don't want to fill it out, just continue.

```shell
? scope of task (empty for no use):
```

### description of commit
After filling in the scope of the task, you will be redirected to the step of filling out the commit 
description. This parameter is mandatory, so it is necessary to fill it in before continuing.

```shell
? description of commit (required):
```

### body of commit
After filling in the task description, you will be redirected to the step of filling in the commit body.
You can use semicolons `;` to add break lines, but currently it is restricted to only three lines.
This parameter is optional, if you don't want to fill it out, just continue.

```shell
? body of commit (empty for no use, semicolon for break lines, max 3 lines): 
```

### footer of commit
After filling in the commit body, you will be redirected to the step of filling out the commit footer. 
Currently, the footer can only contain one line.
This parameter is optional, if you don't want to fill it out, just continue.

```shell
? footer of commit (empty for no use, one line):
```

Finally, after filling in the option at the bottom of the commit, you will be redirected to the step of doing 
git push to your current branch. 

```shell
? push changes to current branch (feat/do-something)? no / yes
```

Select yes to push, or select no, if you do not want to push or if you want 
to push to another branch. If you choose to commit only, a message will appear confirming that the commit was 
successful.

```shell
Commit successfully. To check, just use the command "git log -i" in terminal.
```

You can check the final commit message using the `git log -i` command.

If you choose to push, a message will appear confirming that the push was made in the current repository.

## Rules

1. You can only use the features if you are in a git project (which contains the .git folder).

2. You can only use the features if your git project is pointing to a remote url.

3. You can cancel the process during execution by pressing CTRL + C. In this case, no action will be taken.

4. If you have not chosen the push option, and you made a mistake when writing the commit message, use the `git commit --amend` command to edit your commit before giving the push.

5. If you chose the push option, and made a mistake when writing the c ommit message, use the command `git revert <commit_hash>` to go back.

## Details

* Inspired in [Conventionall Commits](https://www.conventionalcommits.org/en/v1.0.0/).

* More details in the [wiki](https://github.com/lucasrochagit/ezcommit/wiki) page as soon as possible.

### Future Features
- ¹A detailed wiki for library usage
- ²Allow more lines in body and footer.

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<!-- CONTACT -->

## Authors

- **Lucas Rocha** - _Initial Work_. </br></br>
  [![LinkedIn](https://img.shields.io/static/v1?label=linkedin&message=@lucasrochacc&color=0A66C2)](https://www.linkedin.com/in/lucasrochacc/)
  [![Github](https://img.shields.io/static/v1?label=github&message=@lucasrochagit&color=black)](https://github.com/lucasrochagit/)

[//]: # (These are reference links used in the body of this note.)
[node.js]: <https://nodejs.org>
[npm.js]: <https://www.npmjs.com/>
[license-image]: https://img.shields.io/badge/license-Apache%202.0-blue.svg
[license-url]: https://github.com/lucasrochagit/ezcommit/blob/main/LICENSE
[npm-image]: https://img.shields.io/npm/v/ezcommit.svg?color=red&logo=npm
[npm-url]: https://npmjs.org/package/ezcommit
[npm-downloads-image]: https://img.shields.io/npm/dm/ezcommit.svg
[npm-downloads-url]: https://npmjs.org/package/ezcommit
[dependencies-image]: https://shields.io/badge/dependencies-1-green
[dependencies-url]: https://shields.io/badge/dependencies-0-green
[releases-image]: https://img.shields.io/github/release-date/lucasrochagit/ezcommit.svg
[releases-url]: https://github.com/lucasrochagit/ezcommit/releases
[contributors-image]: https://img.shields.io/github/contributors/lucasrochagit/ezcommit.svg?color=green
[contributors-url]: https://github.com/lucasrochagit/ezcommit/graphs/contributors
[issues-image]: https://img.shields.io/github/issues/lucasrochagit/ezcommit.svg
[issues-url]: https://github.com/lucasrochagit/ezcommit/issues
