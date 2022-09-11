import pic1 from '../images/activitiesNew1.png';
import pic2 from '../images/activities2New2.png';
import pic3 from '../images/activitiesNew5.png';
import pic4 from '../images/activitiesNew6.png';
import { useEffect } from 'react';


const ResRoll = () => {

let myIndex = 0;
    useEffect(() => {
        carousel();               
    }, [])
    

    
    function carousel() {        
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        
        setTimeout(carousel, 4000);            
    }
    return (
        <div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic1} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3>Activities</h3>
                    <p><b>We have lots of activities for you.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic2} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3>Aged Care Home</h3>
                    <p><b>If you want a aged care home? Just Conatact us.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic3} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3>Government Benefits</h3>
                    <p><b>We have all the ways for applying the government benefits.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic4} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3>AI Chat</h3>
                    <p><b>If you feel lonely,just talk what you want with the AI chat box.</b></p>
                </div>
            </div>
        </div>
    )
};


export default ResRoll;