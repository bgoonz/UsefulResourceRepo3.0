import React, { Component } from 'react';

const DisplayComments = (props) => {
  let commentss;
  if (props.comments.length > 0) {
    commentss = props.comments.map((reply, i) => {
      return (
        <div className="Post-Comment" key={i}>
          <div className="Comment-Username"><strong>{reply.username}</strong></div>
          <div className="Comment-Text">{reply.text}</div>
        </div>
      );
    });
  } else {
    commentss = <div class="No-Comments">Be the first to comment!</div>
  }
  return (
    <div>{commentss}</div>
  );
};

export default DisplayComments;

// export default class DisplayComments extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     componentDidMount() {
//         console.log('DisplayComments ready to go');
//     }

//     render() {
//         if (this.props.post.comments) {
//             const postcomments = this.props.post.comments.map((comment, i) => {
//                 return (
//                     <div className="Post-Comment" key={i}>
//                         <div className="Comment-Username">{comment.username}</div>
//                         <div className="Comment-Text">{comment.text}</div>
//                     </div>
//                 );
//             });
//         } else {
//             return (
//                 <div>Be the first to leave a comment!</div>
//             );
//         }
//     }
// }
