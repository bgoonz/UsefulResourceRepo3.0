# readline \-\-- The GNU readline Library

::: {.module synopsis="The GNU readline library"} readline :::

Purpose

: Provides an interface to the GNU readline library for interacting with the user at a command prompt.

The `readline` module can be used to enhance interactive command line programs to make them easier to use. It is primarily used to provide command line text completion, or \"tab completion\".

::: {.note} ::: {.admonition-title} Note :::

Because `readline` interacts with the console content, printing debug messages makes it difficult to see what is happening in the sample code versus what readline is doing for free. The following examples use the `logging`{.interpreted-text role="mod"} module to write debug information to a separate file. The log output is shown with each example. :::

::: {.note} ::: {.admonition-title} Note :::

The GNU libraries needed for `readline` are not available on all platforms by default. If your system does not include them, you may need to recompile the Python interpreter to enable the module, after installing the dependencies. A stand-alone version of the library is also distributed from the Python Package Index under the name [gnureadline](https://pypi.python.org/pypi/gnureadline). The examples in this section first try to import gnureadline, and then fall back to readline.

::: {.only} html

_Special thanks to Jim Baker for pointing out this package._ ::: :::

## Configuring

There are two ways to configure the underlying readline library, using a configuration file or the `parse_and_bind()` function. Configuration options include the key-binding to invoke completion, editing modes (`vi` or `emacs`), and many other values. Refer to the documentation for the GNU readline library for details.

The easiest way to enable tab-completion is through a call to `parse_and_bind()`. Other options can be set at the same time. This example changes the editing controls to use \"vi\" mode instead of the default of \"emacs\". To edit the current input line, press `ESC` then use normal `vi` navigation keys such as `j`, `k`, `l`, and `h`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_parse_and_bind.py :::

The same configuration can be stored as instructions in a file read by the library with a single call. If `myreadline.rc` contains

::: {.literalinclude caption=""} myreadline.rc :::

the file can be read with `read_init_file()`

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_read_init_file.py :::

## Completing Text

This program has a built-in set of possible commands and uses tab-completion when the user is entering instructions.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_completer.py :::

The `input_loop()` function reads one line after another until the input value is `"stop"`. A more sophisticated program could actually parse the input line and run the command.

The `SimpleCompleter` class keeps a list of \"options\" that are candidates for auto-completion. The `complete()` method for an instance is designed to be registered with `readline` as the source of completions. The arguments are a `text` string to complete and a `state` value, indicating how many times the function has been called with the same text. The function is called repeatedly with the state incremented each time. It should return a string if there is a candidate for that state value or `None` if there are no more candidates. The implementation of `complete()` here looks for a set of matches when state is `0`, and then returns all of the candidate matches one at a time on subsequent calls.

When run, the initial output is:

```{.sourceCode .none}
$ python3 readline_completer.py

Prompt ("stop" to quit):
```

Pressing `TAB` twice causes a list of options to be printed.

```{.sourceCode .none}
$ python3 readline_completer.py

Prompt ("stop" to quit):
list   print  start  stop
Prompt ("stop" to quit):
```

The log file shows that `complete()` was called with two separate sequences of state values.

```{.sourceCode .none}
$ tail -f /tmp/completer.log

(empty input) matches: ['list', 'print', 'start', 'stop']
complete('', 0) => 'list'
complete('', 1) => 'print'
complete('', 2) => 'start'
complete('', 3) => 'stop'
complete('', 4) => None
(empty input) matches: ['list', 'print', 'start', 'stop']
complete('', 0) => 'list'
complete('', 1) => 'print'
complete('', 2) => 'start'
complete('', 3) => 'stop'
complete('', 4) => None
```

The first sequence is from the first TAB key-press. The completion algorithm asks for all candidates but does not expand the empty input line. Then on the second TAB, the list of candidates is recalculated so it can be printed for the user.

If the next input is \"`l`\" followed by another TAB, the screen shows:

```{.sourceCode .none}
Prompt ("stop" to quit): list
```

and the log reflects the different arguments to `complete()`:

```{.sourceCode .none}
'l' matches: ['list']
complete('l', 0) => 'list'
complete('l', 1) => None
```

Pressing RETURN now causes `input()` to return the value, and the `while` loop cycles.

```{.sourceCode .none}
Dispatch list
Prompt ("stop" to quit):
```

There are two possible completions for a command beginning with \"`s`\". Typing \"`s`\", then pressing TAB finds that \"`start`\" and \"`stop`\" are candidates, but only partially completes the text on the screen by adding a \"`t`\".

The log file shows:

```{.sourceCode .none}
's' matches: ['start', 'stop']
complete('s', 0) => 'start'
complete('s', 1) => 'stop'
complete('s', 2) => None
```

and the screen:

```{.sourceCode .none}
Prompt ("stop" to quit): st
```

::: {.note} ::: {.admonition-title} Note :::

If a completer function raises an exception, it is ignored silently and `readline` assumes there are no matching completions. :::

## Accessing the Completion Buffer

The completion algorithm in `SimpleCompleter` only looks at the text argument passed to the function, but does not use any more of readline\'s internal state. It is also possible to use `readline` functions to manipulate the text of the input buffer.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_buffer.py :::

In this example, commands with sub-options are being completed. The `complete()` method needs to look at the position of the completion within the input buffer to determine whether it is part of the first word or a later word. If the target is the first word, the keys of the options dictionary are used as candidates. If it is not the first word, then the first word is used to find candidates from the options dictionary.

There are three top-level commands, two of which have sub-commands.

- list
  - files
  - directories
- print
  - byname
  - bysize
- stop

Following the same sequence of actions as before, pressing TAB twice gives the three top-level commands:

```{.sourceCode .none}
$ python3 readline_buffer.py

Prompt ("stop" to quit):
list   print  stop
Prompt ("stop" to quit):
```

and in the log:

```{.sourceCode .none}
origline=''
begin=0
end=0
being_completed=
words=[]
complete('', 0) => list
complete('', 1) => print
complete('', 2) => stop
complete('', 3) => None
origline=''
begin=0
end=0
being_completed=
words=[]
complete('', 0) => list
complete('', 1) => print
complete('', 2) => stop
complete('', 3) => None
```

If the first word is `"list "` (with a space after the word), the candidates for completion are different.

```{.sourceCode .none}
Prompt ("stop" to quit): list
directories  files
```

The log shows that the text being completed is _not_ the full line, but the portion after `list`.

```{.sourceCode .none}
origline='list '
begin=5
end=5
being_completed=
words=['list']
candidates=['files', 'directories']
complete('', 0) => files
complete('', 1) => directories
complete('', 2) => None
origline='list '
begin=5
end=5
being_completed=
words=['list']
candidates=['files', 'directories']
complete('', 0) => files
complete('', 1) => directories
complete('', 2) => None
```

## Input History

`readline` tracks the input history automatically. There are two different sets of functions for working with the history. The history for the current session can be accessed with `get_current_history_length()` and `get_history_item()`. That same history can be saved to a file to be reloaded later using `write_history_file()` and `read_history_file()`. By default the entire history is saved but the maximum length of the file can be set with `set_history_length()`. A length of -1 means no limit.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_history.py :::

The `HistoryCompleter` remembers everything typed, and uses those values when completing subsequent inputs.

```{.sourceCode .none}
$ python3 readline_history.py

Max history file length: -1
Startup history: []
Prompt ("stop" to quit): foo
Adding 'foo' to the history
Prompt ("stop" to quit): bar
Adding 'bar' to the history
Prompt ("stop" to quit): blah
Adding 'blah' to the history
Prompt ("stop" to quit): b
bar   blah
Prompt ("stop" to quit): b
Prompt ("stop" to quit): stop
Final history: ['foo', 'bar', 'blah', 'stop']
```

The log shows this output when the \"`b`\" is followed by two TABs.

```{.sourceCode .none}
history: ['foo', 'bar', 'blah']
matches: ['bar', 'blah']
complete('b', 0) => 'bar'
complete('b', 1) => 'blah'
complete('b', 2) => None
history: ['foo', 'bar', 'blah']
matches: ['bar', 'blah']
complete('b', 0) => 'bar'
complete('b', 1) => 'blah'
complete('b', 2) => None
```

When the script is run the second time, all of the history is read from the file.

```{.sourceCode .none}
$ python3 readline_history.py

Max history file length: -1
Startup history: ['foo', 'bar', 'blah', 'stop']
Prompt ("stop" to quit):
```

There are functions for removing individual history items and clearing the entire history, as well.

## Hooks

There are several hooks available for triggering actions as part of the interaction sequence. The _startup_ hook is invoked immediately before printing the prompt, and the _pre-input_ hook is run after the prompt, but before reading text from the user.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} readline_hooks.py :::

Either hook is a potentially good place to use `insert_text()` to modify the input buffer.

```{.sourceCode .none}
$ python3 readline_hooks.py

Prompt ("stop" to quit): from startup_hook from pre_input_hook
```

If the buffer is modified inside the pre-input hook, `redisplay()` must be called to update the screen.

::: {.seealso}

- `readline`{.interpreted-text role="pydoc"}
- [GNU readline](http://tiswww.case.edu/php/chet/readline/readline.html) \--Documentation for the GNU readline library.
- [readline init file format](http://tiswww.case.edu/php/chet/readline/readline.html#SEC10) \-- The initialization and configuration file format.
- [effbot: The readline module](http://sandbox.effbot.org/librarybook/readline.htm) \--Effbot\'s guide to the readline module.
- [gnureadline](https://pypi.python.org/pypi/gnureadline) \-- A statically linked version of `readline` available for many platforms and installable via `pip`.
- [pyreadline](http://ipython.org/pyreadline.html) \-- pyreadline, developed as a Python-based replacement for readline to be used on Windows.
- `cmd`{.interpreted-text role="mod"} \-- The `cmd` module uses `readline` extensively to implement tab-completion in the command interface. Some of the examples here were adapted from the code in `cmd`.
- `rlcompleter`{.interpreted-text role="mod"} \-- `rlcompleter` uses `readline` to add tab-completion to the interactive Python interpreter. :::
