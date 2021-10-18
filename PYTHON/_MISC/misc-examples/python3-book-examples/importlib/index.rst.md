# importlib \-\-- Python\'s Import Mechanism

::: {.module synopsis="Interface to module import mechanism."} importlib :::

Purpose

: The importlib module exposes the implementation of Python\'s import statement.

The `importlib` module includes functions that implement Python\'s import mechanism for loading code in packages and modules. It is one access point to importing modules dynamically, and useful in some cases where the name of the module that needs to be imported is unknown when the code is written (for example, for plugins or extensions to an application).

## Example Package

The examples in this section use a package called `example` with `__init__.py`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} example/\_\_init\_\_.py :::

The package also contains `submodule.py`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} example/submodule.py :::

Watch for the text from the `print()` calls in the sample output when the package or module are imported.

## Module Types

Python supports several styles of modules. Each requires its own handling when opening the module and adding it to the namespace, and support for the formats varies by platform. For example, under Microsoft Windows, shared libraries are loaded from files with extensions `.dll` or `.pyd`, instead of `.so`. The extensions for C modules may also change when using a debug build of the interpreter instead of a normal release build, since they can be compiled with debug information included as well. If a C extension library or other module is not loading as expected, use the constants defined in `importlib.machinery` to find the supported types for the current platform, and the parameters for loading them.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_suffixes.py :::

The return value is a sequence of tuples containing the file extension, mode to use for opening the file containing the module, and a type code from a constant defined in the module. This table is incomplete, because some of the importable module or package types do not correspond to single files.

```{.sourceCode .none}
$ python3 importlib_suffixes.py

Source:     ['.py']
Debug:      ['.pyc']
Optimized:  ['.pyc']
Bytecode:   ['.pyc']
Extension:  ['.cpython-37m-darwin.so', '.abi3.so', '.so']
```

## Importing Modules

The high level API in `importlib` makes it simple to import a module given an absolute or relative name. When using a relative module name, specify the package containing the module as a separate argument.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_import_module.py :::

The return value from `import_module()` is the module object that was created by the import.

```{.sourceCode .none}
$ python3 importlib_import_module.py

Importing example package
Importing submodule
<module 'example.submodule' from '.../example/submodule.py'>
<module 'example.submodule' from '.../example/submodule.py'>
True
```

If the module cannot be imported, `import_module()` raises `ImportError`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_import_module_error.py :::

The error message includes the name of the missing module.

```{.sourceCode .none}
$ python3 importlib_import_module_error.py

Importing example package
Error: No module named 'example.nosuchmodule'
```

To reload an existing module, use `reload()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_reload.py :::

The return value from `reload()` is the new module. Depending on which type of loader was used, it may be the same module instance.

```{.sourceCode .none}
$ python3 importlib_reload.py

Importing example package
Importing submodule
<module 'example.submodule' from '.../example/submodule.py'>
Importing submodule
True
```

## Loaders

The lower-level API in `importlib.util` provides access to the loader objects, as described in `sys-imports`{.interpreted-text role="ref"} from the section on the `sys` module. To get the information needed to load the module for a module, use `find_spec()` to find the \"import spec\". Then to retrieve the module, use the loader\'s `load_module()` method.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_find_loader.py :::

This example loads the top level of the `example` package.

```{.sourceCode .none}
$ python3 importlib_find_loader.py

Loader: <_frozen_importlib_external.SourceFileLoader object at
0x104d31208>
Importing example package
Module: <module 'example' from '.../example/__init__.py'>
```

Submodules within packages need to be loaded separately using the path from the package. In the following example, the `example` package is is passed to `find_spec()` to create a loader capable of loading the submodule.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} importlib_submodule.py :::

As with `import_module()`, the name of the submodule should be given wit the relative path prefix.

```{.sourceCode .none}
$ python3 importlib_submodule.py

Importing example package
Loader: <_frozen_importlib_external.SourceFileLoader object at
0x108b465f8>
Importing submodule
Module: <module 'example.submodule' from
'.../example/submodule.py'>
```

::: {.seealso}

- `importlib`{.interpreted-text role="pydoc"}
- `sys-imports`{.interpreted-text role="ref"} \-- Import hooks, the module search path, and other related machinery in the `sys` module.
- `inspect`{.interpreted-text role="mod"} \-- Load information from a module programmatically.
- `302`{.interpreted-text role="pep"} \-- New import hooks.
- `369`{.interpreted-text role="pep"} \-- Post import hooks.
- `488`{.interpreted-text role="pep"} \-- Elimination of PYO files.

> - `Python 2 to 3 porting notes for importlib <porting-importlib>`{.interpreted-text role="ref"} :::
