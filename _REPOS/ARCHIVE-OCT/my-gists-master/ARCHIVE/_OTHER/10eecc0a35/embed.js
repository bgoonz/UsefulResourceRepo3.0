const App = () => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      className="codepen"
      penTitle="My sweet demo"
      embedHeight="400"
      themeId="31205"
      editable
      description="Renders a barebones React component"
      tags={["react", "react-docs-demo"]}
      htmlClasses={["loading", "no-js"]}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
      scripts={[
        "https://unpkg.com/react@16.8.6/umd/react.development.js",
        "https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js",
      ]}
      stylesheets={["https://unpkg.com/normalize.css@8.0.1/normalize.css"]}
    >
      <PrefillLang lang="html">
        {stripIndent`
            <div id="root"></div>
        `}
      </PrefillLang>
      <PrefillLang lang="scss">
        {stripIndent`
            $bg: #eee;
            body {
              background: $bg; 
            }
        `}
      </PrefillLang>
      <PrefillLang lang="babel">
        {stripIndent`
          const App = () => <h1>Hello</h1>;
          ReactDOM.render(
            <App/>,
            document.getElementById('root')
          );
        `}
      </PrefillLang>
    </PrefillEmbed>
  );
};
