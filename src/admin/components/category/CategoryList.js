import {connect} from "react-redux";

function CategoryList(props) {

    function getCategoryParentName(parentId){
        let parentName = 'No Parent';
        {props.categoryList.forEach((category)=>{
            if (category.id.toString() === parentId)
                parentName = category.name
        })}
        return parentName;
    }



    function deleteByIdUser(id){
        props.deleteById(id)
    }
    return <div>
        <table className="table">
            <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>ParentName</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
            {props.categoryList.map((category)=>{
                return  <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{getCategoryParentName(category.parentId === undefined ? '0' : category.parentId)}</td>
                    <td><button className='btn btn-outline-danger' onClick={()=>deleteByIdUser(category.id)} >delete</button></td>
                </tr>
            })}
            </tbody>
        </table>
    </div>

}
function mapDispatchToProps(dispatch) {
    return {
        deleteById:function (id){
            dispatch({
                type:"DELETE_CATEGORY",
                payload:id
            })
        }
    }
}
function mapStateToProps(state) {
    return state.categoryReducer
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

