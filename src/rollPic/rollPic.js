import React, {useState,useEffect} from "react";
import './rollPic.css';

function useInterval(callback,interval){
    useEffect(() => {
        const start = new Date().getTime()
        const I = setInterval(() => {
            callback(new Date().getTime() - start)
        }, interval)
        return () => clearInterval(I)
    },[])
}

function useSlider(N, speed = 3000){

    const [slider,setSlider] = useState(0)
    useInterval(diff => {
        setSlider(_=> Math.floor(diff / speed) % N);
    },300)
    return slider;
}

const imgs = [
    "https://cf.ltkcdn.net/seniors/images/orig/235654-1600x1030-ideas-fun-activities-elderly.jpg",
    "https://www.opencolleges.edu.au/blog/wp-content/uploads/2020/04/walking.jpg",
    "https://optimumpersonalcare.com/wp-content/uploads/Elderly-people-having-fun-in-the-outdoors-1.jpg",
    "https://discoversarabella.com/wp-content/uploads/2020/09/happy-activities-senior-citizens-can-do-instead-of-bingo-1320x880.jpg"
];


// const RollPic = () =>{

//     return (
//         <div id="banner">
//             <div id="imglist">
//                 <div><img src={require("../images/activities1.jpg")} alt=""></img></div>
//                 <div><img src={require("../images/activities2.jpg")} alt=""></img></div>
//                 <div><img src={require("../images/activities3.jpg")} alt=""></img></div>
//                 <div><img src={require("../images/activities4.jpg")} alt=""></img></div>
//                 <div><img src={require("../images/activities1.jpg")} alt=""></img></div>
//             </div>
//         </div>
//     )
// };

export default () => {
    const slider = useSlider(imgs.length)
    return(
        <div className="scroller">
            <div className="inner" style={{width:`${imgs.length * 100}%`,transform:`translateX(-${100*slider/imgs.length}%)`}}>
                {imgs.map(src => {
                    return <img style={{
                        width: `${100/imgs.length}%`
                    }} key={src} alt="" src={src} />;
                })}
            </div>
        </div>
    );
}

// export default RollPic;