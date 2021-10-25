The solution is to return the object itself from every call.

\`\`\`js run demo let ladder = { step: 0, up() { this.step++; _!_ return this; _/!_ }, down() { this.step–; _!_ return this; _/!_ }, showStep() { alert( this.step ); _!_ return this; _/!_ } };

ladder.up().up().down().up().down().showStep(); // 1 \`\`\`

We also can write a single call per line. For long chains it’s more readable:

    ladder
      .up()
      .up()
      .down()
      .up()
      .down()
      .showStep(); // 1
