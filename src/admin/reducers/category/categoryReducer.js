import getObjectFromLocalStorage from "../../local_storage/getObject";
import addObjectToLocalStorage from "../../local_storage/addObject";

function categoryReducer(state = {categoryList:getInitialRedux()}, action){
    switch (action.type){
        case "ADD_CATEGORY":
            state = {
                ...state,
                categoryList: state.categoryList.concat(action.payload)
            }
            break;
        case "DELETE_CATEGORY":
            state = {
                ...state,
                categoryList: state.categoryList.filter(category => {
                    if (category.id !== action.payload ){
                        return category
                    }
                })
            }
            break;
        default:
            return state;
    }
    addObjectToLocalStorage("categoryReducer", state.categoryList)
    return state;
}
export default categoryReducer;

function getInitialRedux(){
    let object = getObjectFromLocalStorage("categoryReducer");
    if (object !== null)
        return JSON.parse(object);

    return [];
}