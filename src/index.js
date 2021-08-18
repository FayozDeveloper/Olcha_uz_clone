import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css"
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import categoryReducer from "./admin/reducers/category/categoryReducer";
import productReducer from "./admin/reducers/product/productReducer";


const reducers = combineReducers({categoryReducer, productReducer})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

