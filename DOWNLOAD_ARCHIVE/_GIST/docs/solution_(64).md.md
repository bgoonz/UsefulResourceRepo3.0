The result is `4`:

\`\`\`js run let fruits = \[“Apples”, “Pear”, “Orange”\];

let shoppingCart = fruits;

shoppingCart.push(“Banana”);

_!_ alert( fruits.length ); // 4 _/!_ \`\`\`

That’s because arrays are objects. So both `shoppingCart` and `fruits` are the references to the same array.
