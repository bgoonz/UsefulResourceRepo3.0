import React from 'react';

const AddMovie = props => {
  return(
    <div>
      <form>
        <input
          type="text"
          placeholder="title..."
          name="title"
          onChange={props.handleChange}
          value={props.title}
        />
        <input
          type="text"
          placeholder="director..."
          name="director"
          onChange={props.handleChange}
          value={props.director}
        />
        <input
          type="text"
          placeholder="metascore..."
          name="metascore"
          onChange={props.handleChange}
          value={props.metascore}
        />
        <input
          type="text"
          placeholder="stars..."
          name="stars"
          onChange={props.handleChange}
          value={props.stars}
        />
        <button onClick={props.handleMovieAdd}>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;