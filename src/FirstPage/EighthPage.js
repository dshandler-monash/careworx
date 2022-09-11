import NavigationBar from "../navigationBar/NavigationBar";
import TopAnchor from "../topAnchor/TopAnchor";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Eighth = () =>{
    return (
        <div>
            <TopAnchor></TopAnchor>
            <NavigationBar></NavigationBar>
        </div>
    )
};

export default Eighth;