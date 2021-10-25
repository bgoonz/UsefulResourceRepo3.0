# Description

Script to generate pdf files from markdown files using `pandoc`, which
is assumed installed. It processes all the markdown files in the
current directory and its subfolders and places the resulting pdf
files in a `./target` directory, maintaining their original subfolder
structure.

> _**Note:** The script aims also to be one example of bash
> scripting, so that I can use it as reference for several code
> snippets_

# Execute script

You can download the script if you want to modify it, and make it
executable. You can do it with following shell command:

```shell
curl -LO https://gist.github.com/rbf/6064734/raw/generate-pdf && chmod +x ./generate-pdf
```

If you just want to execute it directly, without modifying it or
saving a local copy, you can execute following command:

```shell
bash <(curl -sSL https://gist.github.com/rbf/6064734/raw/generate-pdf)
```

To install an executable copy of the script into your `/usr/local/bin` directory, you can execute following command:

```shell
bash <(curl -sSL https://gist.github.com/rbf/6064734/raw/generate-pdf) --install
```

# Usage

The main usage pattern is the following:

```shell
  $ ./generate-pdf [path-pattern [target-path]]
```

To remember this usage notice, you can use:

```shell
  $ ./generate-pdf --help
```

## Examples

- `$ ./generate-pdf --help` Prints this help and exits

- `$ ./generate-pdf --version` Prints the version of the script
  and exits

- `$ ./generate-pdf --install` Makes a copy of the script to
  '/usr/local/bin' and exits

- `$ ./generate-pdf --uninstall` Deletes the script from
  '/usr/local/bin' and exits

- `$ ./generate-pdf --update` Updates the script installed in
  '/usr/local/bin' and exits

- `$ ./generate-pdf` All .md and .markdown files in
  the current directory and its subdirectories are converted in pdf in
  the ./target directory, maintaining its original sub-folder structure

- `$ ./generate-pdf api` All .md and .markdown files in
  the current directory and its subdirectories containing "api" (case
  sensitive) in the file name or the path are converted in pdf in the
  ./target directory, maintaining its original sub-folder structure

- `$ ./generate-pdf ./doc/*api` All .md and .markdown files in
  the "doc/" subdirectory and its subdirectories containing "api" (case
  sensitive) in the file name or the path are converted in pdf in the
  ./target directory, maintaining its original sub-folder structure

- `$ ./generate-pdf api pdfs` All .md and .markdown files in
  the current directory and its subdirectories containing "api" (case
  sensitive) in the file name or the path are converted in pdf in the
  ./pdfs directory, maintaining its original sub-folder structure

- `$ ./generate-pdf api .` All .md and .markdown files in
  the current directory and its subdirectories containing "api" (case
  sensitive) in the file name or the path are converted in pdf in the
  current directory, maintaining its original sub-folder structure,
  i.e. next to their .md counterparts

- `$ ./generate-pdf . .` All .md and .markdown files in
  the current directory and its subdirectories are converted in pdf in
  the current directory, maintaining its original sub-folder
  structure, i.e. next to their .md counterparts
