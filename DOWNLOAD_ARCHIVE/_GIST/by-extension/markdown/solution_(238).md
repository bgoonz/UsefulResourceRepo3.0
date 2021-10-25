The solution is `pattern:<[^<>]+>`.

\`\`\`js run let regexp = /&lt;\[^&lt;&gt;\]+&gt;/g;

let str = ‘&lt;&gt; ’;

alert( str.match(regexp) ); // ‘’, ‘’, ‘’ \`\`\`
