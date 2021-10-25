\`\`\`js run function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }

ask( “Do you agree?”, _!_ () =&gt; alert(“You agreed.”), () =&gt; alert(“You canceled the execution.”) _/!_ ); \`\`\`

Looks short and clean, right?
