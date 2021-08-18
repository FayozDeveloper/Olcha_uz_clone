import React from "react";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css'
import { Rate } from 'antd';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
];
function Card(props){
    const getParentName =(categoryId)=>{
        props.categoryReducer.categoryList.filter((item)=>{
            if (categoryId==item.id){
                return item.name
            }
        })
    }
    return(
        <div>
            <Carousel breakPoints={breakPoints} className='mt-3'>
                {props.productReducer.productList.map((product)=>{
                    return(
                        <div className='Card d-flex mt-1 mb-1'>
                            <div className="cardImg">
                                <a href='#'><img src="" alt=""/></a>
                                <div className="cardInfo">
                                    <a href="#" className='category'>{()=>getParentName(product.categoryId)}</a>
                                    <a href="#" className='title'>{product.title}</a>
                                    <Rate disabled defaultValue={4}/>
                                    <div className="price">
                                        <small className='monthly'>{product.monthly}</small>
                                        <strike className='strike'>{product.strikePrice}</strike>
                                        <div className="actual h5">{product.price}</div>
                                        <small>{new Date().toLocaleDateString()}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Card);



