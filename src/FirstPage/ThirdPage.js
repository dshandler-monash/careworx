import NavigationBar from "../navigationBar/NavigationBar";
import RollPic from "../rollPic/rollPic";
import TopAnchor from "../topAnchor/TopAnchor";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SocialActivity from "../SocialActivity/SocialActivity";


const Third = () =>{
    return (
        <div>
            <SocialActivity></SocialActivity>
            <TopAnchor></TopAnchor>
            <NavigationBar></NavigationBar>
        </div>
    )
};

export default Third;