import React from 'react';
import firebasedb from '../config/fbConfig';


const database = firebasedb.database();
const commentsReference = database.ref('comments');


class CommentItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           content: this.props.content,
           commentid: this.props.commentid
          };

          this.removeComment = this.removeComment.bind(this);
    }

    removeComment(e){
        //removes comment from FB
        database.ref('comments/' + this.state.commentid ).remove();
        //removes comment from DOM
        const elem = e.target.parentElement;
        elem.parentNode.removeChild(elem);
    }
    
    render(){ 
        return(
            <p className="notification" >
             {this.state.content}  
             <a class="delete is-small" onClick={this.removeComment}></a>
            </p>
        )
    }
}


export default CommentItem;