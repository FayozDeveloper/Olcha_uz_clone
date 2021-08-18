import addObjectToLocalStorage from "../../local_storage/addObject";
import getObjectFromLocalStorage from "../../local_storage/getObject";

function productReducer(state = { productList: getInitialProductList()}, action){
    switch (action.type){
        case "ADD_PRODUCT":
                state = {
                    ...state,
                    productList: state.productList.concat(action.payload)
                }
            break;
        case "DELETE_PRODUCT":
                state = {
                    ...state,
                    productList: state.productList.filter(product => {
                        if (product.id !== action.payload ){
                           return product
                        }
                    })
                }
            break;
        default:
            return state;
    }
    addObjectToLocalStorage("productReducer", state.productList)
    return state;
}
export default productReducer;

function getInitialProductList(){
    let productList = getObjectFromLocalStorage("productReducer");
    if (productList !== null)
        return JSON.parse(productList)

    return [];
}
