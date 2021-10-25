import React, { Component } from 'react';
import DisplayComments from './DisplayComments';


export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentInput: '',
        };
    }
    componentDidMount() {
        console.log('PostContainer loaded and ready to go');
    }

    render() {
        if (this.props.posts.length > 0) {
            const posts = this.props.posts.map((post, i) => {
                return (
                    <div className="Post-Wrapper" key={i}>
                        <div className="Post-Username">{post.username}</div>
                        <img className="Post-Img" src={post.imageUrl} />
                        <div className="Post-Likes">{post.likes} likes</div>
                        <DisplayComments comments={post.comments} />
                        <div className="Post-Timestamp">Posted {post.timestamp}</div>
                    </div>
                );
            });
            return (
                <ul>
                    {posts}
                </ul>);
        } else return null;
    }
}

// const PostContainer = (props) => {
//     if (props.posts.length > 0) {
//         const posts = props.posts.map((post) => {
//             return (
//                 <div>
//                     <div>{post.username}</div>
//                     <img src={post.imageUrl} />
//                     <div>{post.likes} like</div>
//                     <div>{post.comments.length} comments</div>
//                     <div>Posted {post.timestamp}</div>
//                 </div>
//             );
//         });
//         return (
//             <div>
//                 {posts}
//             </div>);
//     }
//     return null;
//     // } else {
//     //
//     // }
// };

// export default PostContainer;
