Runtime Environment {#sys-runtime}
===================

`sys` provides low-level APIs for interacting with the system outside of
an application, by accepting command line arguments, accessing user
input, and passing messages and status values to the user.

Command Line Arguments {#sys-argv}
----------------------

The arguments captured by the interpreter are processed there and not
passed to the program being run. Any remaining options and arguments,
including the name of the script itself, are saved to `sys.argv` in case
the program does need to use them.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_argv.py
:::

In the third example, the `-u` option is understood by the interpreter,
and is not passed to the program being run.

``` {.sourceCode .none}
$ python3 sys_argv.py

Arguments: ['sys_argv.py']

$ python3 sys_argv.py -v foo blah

Arguments: ['sys_argv.py', '-v', 'foo', 'blah']

$ python3 -u sys_argv.py

Arguments: ['sys_argv.py']
```

::: {.seealso}
-   `argparse`{.interpreted-text role="mod"} \-- Module for parsing
    command line arguments.
:::

Input and Output Streams {#sys-input-output}
------------------------

Following the Unix paradigm, Python programs can access three file
descriptors by default.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_stdio.py
:::

`stdin` is the standard way to read input, usually from a console but
also from other programs via a pipeline. `stdout` is the standard way to
write output for a user (to the console) or to be sent to the next
program in a pipeline. `stderr` is intended for use with warning or
error messages.

``` {.sourceCode .none}
$ cat sys_stdio.py | python3 -u sys_stdio.py

STATUS: Reading from stdin
STATUS: Writing data to stdout
#!/usr/bin/env python3

#end_pymotw_header
import sys

print('STATUS: Reading from stdin', file=sys.stderr)

data = sys.stdin.read()

print('STATUS: Writing data to stdout', file=sys.stderr)

sys.stdout.write(data)
sys.stdout.flush()

print('STATUS: Done', file=sys.stderr)
STATUS: Done
```

::: {.seealso}
-   `subprocess`{.interpreted-text role="mod"} and
    `pipes`{.interpreted-text role="mod"} \-- Both subprocess and pipes
    have features for pipelining programs together.
:::

Returning Status
----------------

To return an exit code from a program, pass an integer value to
`sys.exit()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
sys\_exit.py
:::

A nonzero value means the program exited with an error.

``` {.sourceCode .none}
$ python3 sys_exit.py 0 ; echo "Exited $?"

Exited 0

$ python3 sys_exit.py 1 ; echo "Exited $?"

Exited 1
```
