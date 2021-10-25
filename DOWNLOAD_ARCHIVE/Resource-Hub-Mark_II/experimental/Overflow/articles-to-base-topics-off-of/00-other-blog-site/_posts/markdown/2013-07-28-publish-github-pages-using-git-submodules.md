<!--


---
 "Publish github pages using git submodules"
excerpt: "publish your github pages with ease using git submodules"
date: 2014-07-28 01:15:00 IST
updated: 2014-07-28 01:15:00 IST
categories: github, git
tags: github, git
---

When I first start using github pages to publish web pages, it was pretty difficult
for me keep the source code and build seperately. To publish the build with gihub pages I need to

- commit code to master
- build and copy the build to temporary location
- switch to gh-pages branch
- copy back the build and push to gh-pages.

It was too much complicated until I got introduced to [git submodules](http://www.git-scm.com/book/en/Git-Tools-Submodules).

> Submodules allow you to keep a Git repository as a subdirectory of another Git repository.

Its not only another repository, but also another branch of the same repository.
Here to make publishing easier, I used git submodules which will convert my publish directory points to gh-pages branch.

## Setup the Git respository

To start with commit your sourcecode to master branch and push to the remote repository.
Then create a `orphan` branch named `gh-pages`.

```sh
git checkout --orphan gh-pages
```

Removed all the files which are cached to commit. Then create a sample file and push to the remote. This is to create the branch at remote. Then switch to master branch.

## Setup dist/publish folder

If you already have a dist/publish directory remove it from the project and `.gitignore`.

## Create submodule

Create a gh-pages as the submodule to the dist directory

```sh
git submodule add -b <branch name> <repo url> <dist/publish directory>
```

Eg:

```sh
git submodule add -b gh-pages git@github.com:revathskumar/todo-custom-element-backbone.git dist
```

You are done, the `gh-pages` is now cloned to `dist` directory. Now when I change directory to dist the git branch will be be set to `gh-pages`

![Change to dist](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/gh-pages_zpsba1924ac.png)

and when I change back the git branch will be `master`.

![change back](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/07/gh-pages-back_zps7b568471.png)

## Troubleshooting

Sometimes I forgot to create a `gh-pages` branch in the remote before trying to clone `gh-pages` to dist. This will lead to an error. Then I go and set up gh-pages and come back to clone it again, But then I get another error which says

> A git directory for 'dist' is found locally with remote(s)

In this case the only solution which worked for me is to remove the `dist` module.

```sh
rm -rf .git/modules/path_to_submodule
```

In my case it is `rm -rf .git/modules/dist`
