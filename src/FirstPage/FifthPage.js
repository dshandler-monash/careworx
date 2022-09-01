import NavigationBar from "../navigationBar/NavigationBar";
import RollPic from "../rollPic/rollPic";
import TopAnchor from "../topAnchor/TopAnchor";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Fifth = () =>{
    return (
        <div>
            <TopAnchor></TopAnchor>
            <NavigationBar></NavigationBar>
        </div>
    )
};

export default Fifth;