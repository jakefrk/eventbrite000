import React from 'react';


let category = "101";

function selectCategory(){
    // switch (buttonValu) {
    //     case 'MUSIC':
    //       console.log('102');
    //       category = "102";
    //       break;
    //     case 'BUSINESS':
    //       console.log('103');
    //       category = "103";
    //       break;
    //     case 'OUTDOORS':
    //       console.log('104');
    //       category = "104";
    //       break;
    //     default:
    //       console.log('Sorry');
    //   }
}

const Categories = () =>{

    return(
        <div className="categories" >
            <button onClick={selectCategory}>BUSINESS</button>
            <button onClick={selectCategory}>MUSIC</button>
              
        </div>
    )

}

export default Categories;

