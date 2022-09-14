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
                    <h3 className="h3new"><b>Activities</b></h3>
                    <p><b>Are you searching for activities to participate in? We can provide you with a list of social activities that may interest you.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic2} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3 className="h3new"><b>Aged Care Home</b></h3>
                    <p><b>Are you searching for an aged care home? We can help you find your ideal home which meets your needs!</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic3} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3 className="h3new"><b>Government Benefits</b></h3>
                    <p><b>We inform you about all the benefits which the government has extended.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src={pic4} style={{ width: '100%' }} alt=""></img>
                <div className="w3-display-bottommiddle w3-container w3-text-black w3-padding-16 w3-hide-small w3-light-blue w3-opacity-min w3-margin w3-round-xxlarge">
                    <h3 className="h3new"><b>AI Chat</b></h3>
                    <p><b>Are you feeling lonely? Chat with our Artificial Intelligence enabled chatbot which can imitate human interation.</b></p>
                </div>
            </div>
        </div>
    )
};


export default ResRoll;