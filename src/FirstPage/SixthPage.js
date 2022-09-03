import NavigationBar from "../navigationBar/NavigationBar";
import RollPic from "../rollPic/rollPic";
import TopAnchor from "../topAnchor/TopAnchor";
import FindHome from "../FindHome/FindHome";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Sixth = () =>{
    return (
        <div>
            <FindHome></FindHome>
            <TopAnchor></TopAnchor>
            <NavigationBar></NavigationBar>
        </div>
    )
};

export default Sixth;