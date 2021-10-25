import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const FriendsList = props => {
  // make a list of friends
  const friendsList = props.friends.slice().reverse();

  // return a map of the each friend in friendsList
  return (
    <div className="friends">
      {friendsList.map((friend, index) => {
        return (
          <Link key={index} to={`/friends/${friend.id}`}>
            <div className="friend-card">{friend.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsList;
