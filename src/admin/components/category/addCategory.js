import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {connect} from "react-redux";

const AddCategory = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [category, setCategory] = useState({});

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
        const newCategory = {
            ...category,
            [e.target.name]: e.target.value
        }
        console.log(newCategory)
        setCategory(newCategory);

    }

    const addCategory =()=>{
        category.id = Date.now()
        const newCategory = category;
        setCategory(newCategory);
        props.addCategory(category)
        setIsModalVisible(false);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Category
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" onChange={handleInputChange} type="text" className="form-control" placeholder="enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Parent Id</label>
                    <select name="parentId" onChange={handleInputChange} id="parentId" className="form-control">
                        <option value={category.name}>No ParentID</option>
                        {props.categoryList.map((category)=>{
                            return <option  value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <Button type="primary" className='mt-3' onClick={addCategory} >
                    Add Category
                </Button>
            </Modal>
        </>
    );
};

function mapDispatchToProps(dispatch){
    return {
        addCategory: function (category){
            dispatch({
                type:"ADD_CATEGORY",
                payload: category
            })
        },

    }
}
function mapStateToProps(state) {
    return state.categoryReducer
}

export default connect(mapStateToProps,mapDispatchToProps) (AddCategory);

