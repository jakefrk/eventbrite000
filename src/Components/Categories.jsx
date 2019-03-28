import React from 'react';


class Categories extends React.Component {
    constructor(props) {
        super();

        this.state = {
           category: "120"
          };
        
          this.handleChange = this.handleChange.bind(this)
    }    
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            category: event.target.value
        })
    }
 

    render(){ 
        return(
        <div className="categories" >
        <label>SELECT A CATEGORY: </label>
            <select
                value={this.state.category} 
                onChange={this.handleChange}
                name="category"
                >
                <option value="103">PARTY</option>
                <option value="108">SPORTS</option>
                <option value="101">BUSINESS</option>
            </select> 
        </div>
        )
    }
}





 

export default Categories;

