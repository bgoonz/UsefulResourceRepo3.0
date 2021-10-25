const Hello = (props) => {
  return (
    <ul>
      To do:
      <input value={props.name} onChange={props.onNameInput} />
      <button onClick={props.onNameSubmit}>Submit Name</button>
      {props.names.map(name => {
        return (
          <li>
            {name}
          </li>
        );
      })}
    </ul>
  );
};