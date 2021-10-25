\`\`\`js run demo function filterRange(arr, a, b) { // added brackets around the expression for better readability return arr.filter(item =&gt; (a &lt;= item && item &lt;= b)); }

let arr = \[5, 3, 8, 1\];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) \`\`\`
