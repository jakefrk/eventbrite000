import React, {Component} from 'react';
import CommentForm from './CommentForm';
 
class Listing extends Component{
    constructor(props){
        super(props); 
        
        this.state = {
            listingid: this.props.listingInfo.id
          };

    }
    
    render(props){ 

        function formatDate(rawDate){
            return rawDate
         //   new Date(rawDate.toDateString())
        }

        return(
            <article class="message box">  
                <div class="message-header">
                    <p>{this.props.listingInfo.name.text}</p>
                    <a href={this.props.listingInfo.url} className="button is-primary" target="_blank">RSVP</a>
                </div>
                <div class="columns">
                    <div class="column content section">
                        <p><strong>On   {formatDate(this.props.listingInfo.start.local)} : </strong>
                        {this.props.listingInfo.summary}</p>
                        <img src={this.props.listingInfo.logo.url} />
                    </div>
                <div class="column">
                    <CommentForm listingId={this.state.listingid}/>
                </div>
                </div>
            </article>
        )
        
    }

}

 
export default Listing;