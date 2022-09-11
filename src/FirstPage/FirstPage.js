import Homepage from "../HomePage/homepage"
import ResNav from "../ResNav/resNav";
import ResRoll from "../ResRoll/ResRoll";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const First = () =>{
    return (
        <div>
            <ResNav></ResNav>
            <ResRoll />            
            <Homepage></Homepage>
        </div>
    )
};

export default First;