import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


function CategoryComponentTest(props){

    return(
        <div>
            <div className="container mt-5">
               <div className="list-group">
                   <h4>Categories</h4>
                   {props.categoryList.map((category,index)=>{
                       return <Link
                           to={`/categories/${category.name}`}
                           className='list-group-item'
                           key={index}
                       >
                           {category.name}
                       </Link>
                       }
                   )}
               </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return state.categoryReducer
}

export default  connect(mapStateToProps,null)(CategoryComponentTest)


