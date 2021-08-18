import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {connect} from "react-redux";


const AddProduct = (props) => {

    const initialProduct = {
        id:0,
        categoryId:'',
        title:"",
        monthly:"",
        strikePrice:"",
        price: 0,
    }

    const [isModalVisible, setIsModalVisible] = useState(false);// bu modalniki
    const [product, setProduct] = useState(initialProduct); // bu productniki

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleInputChange =(e)=>{
        const newProduct = {
            ...product,
            [e.target.name]: e.target.value
        }

        setProduct(newProduct);

    }

    const addProduct =()=>{
        product.id = Date.now()
        const newProduct = product;
        setProduct(newProduct);
        props.addProduct(product)
        setIsModalVisible(false);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Product
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="form-group">
                    <label htmlFor="name">CategoryName</label>
                    <select name="categoryId" className='form-control' onClick={handleInputChange}>
                        {props.categoryList.map((category)=>{
                            return <option value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input name="title" onChange={handleInputChange} type="text" className="form-control" placeholder="enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Monthly</label>
                    <input name="monthly" onChange={handleInputChange} type="text" className="form-control" placeholder="enter monthly"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">StrikePrice</label>
                    <input name="strikePrice" onChange={handleInputChange} type="text" className="form-control" placeholder="enter strikePrice"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Price</label>
                    <input name="price" onChange={handleInputChange} type="text" className="form-control" placeholder="enter price"/>
                </div>
                <Button type="primary" onClick={addProduct} >
                    Add Product
                </Button>
            </Modal>
        </>
    );
};

function mapDispatchToProps(dispatch){
    return {
        addProduct: function (product){
            dispatch({
                type:"ADD_PRODUCT",
                payload: product
            })
        },

    }
}
function mapStateToProps(state) {
    return state.categoryReducer
}



export default connect(mapStateToProps,mapDispatchToProps) (AddProduct);
