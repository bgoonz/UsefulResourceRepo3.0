import React from "react";
import "../../App.css";

const Form = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="name..."
        name="name"
        onChange={props.handleChange}
        value={props.name}
      />
      <input
        type="text"
        placeholder="timezone..."
        name="timezone"
        onChange={props.handleChange}
        value={props.timesone}
      />
      <input
        type="text"
        placeholder="email..."
        name="email"
        onChange={props.handleChange}
        value={props.email}
      />
      <input
        type="text"
        placeholder="telephone..."
        name="telephone"
        onChange={props.handleChange}
        value={props.telephone}
      />
      <input
        type="text"
        placeholder="avatar url..."
        name="avatar"
        onChange={props.handleChange}
        value={props.avatar}
      />
      <button onClick={props.handleFriendSubmit}>Submit</button>
      <button onClick={props.handleCancel}>Cancel</button>
    </form>
  );
};

export default Form;
