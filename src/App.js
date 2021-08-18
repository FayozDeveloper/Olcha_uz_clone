import React  from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainAdminPanel from "./admin/components/main";
import Header from "./Main/header/header";
import MainCarousel from './Main/Carousel/carousel'

function App() {

    return (
        <Router>
            {/*<Header/>*/}
                    <Route path={'/'} exact={true} component={Header}/>
                    <Route path={'/'} exact  component={MainCarousel}/>
                    <Route path={'/admin'} component={MainAdminPanel}/>
        </Router>
    );
}

export default App;
