# Variables

Variables are short strings of reusable text.

The YAML files in this directory each contain multiple variables.

The _path_, _filename_, and _keys_ within each YAML file determine what its path will be in the data object.

For example, given a file `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Its values would be accessible as:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
