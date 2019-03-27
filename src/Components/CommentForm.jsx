import React from 'react'; 
import firebasedb from '../config/fbConfig';
import CommentItem from './CommentItem';


let commentArray = [];

const database = firebasedb.database();
const commentsReference = database.ref('comments');
 
// commentsReference.on('value', function (snapshot) {
//   if (snapshot.val()){ 
//       const firebaseComments = Object.values(snapshot.val())
//         firebaseComments.forEach(function(comment){ 
//             commentArray.push(comment); 
//           });
//     }
// }); 
  
 
function snapshotToArray(snapshot) {   // credit: https://ilikekillnerds.com/2017/05/convert-firebase-database-snapshotcollection-array-javascript/
  snapshot.forEach(function(childSnapshot) {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      commentArray.push(item);
  }); 
   return commentArray;
};
 
commentsReference.on('value', function(snapshot) {
  snapshotToArray(snapshot);
});


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          value: '', 
          listingid:  this.props.listingId
        };

   //     this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
     
      // handleChange(e) { 
      //   console.log("typing in  " ,  this.state.listingid  , e.target.value)
      // }
    

      handleSubmit(e) {
         e.preventDefault();
         console.log(e.target , '***Comment submitted succesfully****');
// debugger
         this.setState({value: e.target.children[0].children[0].value});

         commentsReference.push({
            content : e.target.children[0].children[0].value,
            listingid : this.state.listingid 
          });
          
          this.setState({value: ''});
      }


    render(){

        const listingId = this.state.listingid;  
        function matchingListingId(obj){
          //checks if the main Listing's id matches the one that's been passed into the comment when its pushed to firebase, so that only comments pertaining to this listing are accepted
          return obj.listingid === listingId  
        }

        const renderedComments = 
               commentArray  
              .filter(matchingListingId)
              .map(commentObject =>  
                    <CommentItem content={commentObject.content}  commentid={commentObject.key}  />
              )
        
        return(
           <div className="section">
              <form className="field has-addons" onSubmit={this.handleSubmit}>
                  <div className="control">
                   
                    <input type="text"required className="input is-info" placeholder="leave a comment"/>
                  </div>
                <div className="control">
                   <input type="submit" className="button is-info" value="Submit" />
              
                </div>
                </form>
                   {renderedComments}
                   </div>
        )
      }


}

export default CommentForm;