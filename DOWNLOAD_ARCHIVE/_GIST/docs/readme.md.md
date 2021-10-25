### Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it’s occurrence (count).

#### Example

    [
        { language: 'JavaScript' },{ language: 'JavaScript' },{ language: 'TypeScript' },
    ]

#### SHOULD BE CONVERTED TO =

    [
    { language: 'JavaScript', count: 2 },
    { language: 'C++', count: 1 },
    { language: 'TypeScript', count: 1 }
    ]

##### The idea is to count the frequency of each unique key in an array of objects and then instead of making the result look like

    { key1: 2, key2: 1, key3: 7 }

The result should be an array of objects so that it can be map over and get rendered in React.JS or something like that.

    [ { key1: 2 }, { key2: 1 }, { key3: 7 } ]
