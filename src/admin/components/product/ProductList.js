import {connect} from "react-redux";

function ProductList(props) {


    function deleteByIdUser(id){
        props.deleteById(id)
    }

    // function getProductParentName(categoryName){
    //     let parentName = 'No Parent';
    //     {props.productList.forEach((product)=>{
    //         if (product.id.toString() === categoryName)
    //             parentName = product.categoryId
    //     })}
    //     return parentName;
    // }

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <td>#</td>
                    <td>id</td>
                    <td>CategoryName</td>
                    <td>title</td>
                    <td>monthly</td>
                    <td>strikePrice</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            {props.productList.map((product,index)=>{
                return  <tr>
                    <td>{++index}</td>
                    <td>{product.id}</td>
                    <td>{product.categoryId}</td>
                    <td>{product.title}</td>
                    <td>{product.monthly}</td>
                    <td>{product.strikePrice}</td>
                    <td>{product.price}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=>deleteByIdUser(product.id)} >delete</button></td>
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
                type:"DELETE_PRODUCT",
                payload:id
            })
        }
    }
}
function mapStateToProps(state) {
    return state.productReducer
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
