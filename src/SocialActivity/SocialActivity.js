import Calender from "../Datepicker/DataPicker";
import "./SocialActivity.css"

const SocialActivity = () =>{

    return (
        <div className="mainbox">
            <img src="https://www.briarwoodretirement.com/wp-content/uploads/2019/06/benefits-of-social-activities-for-seniors.png" id="bgimg"></img>
            <div className="bgcbox">
                <h1>Search Activities</h1>
                <hr></hr>
                <br></br>
                <div className="scbox">
                    <h3>Search Criteria</h3>
                    <p className="p1">Choose Location Postcode:</p>
                    <select className="texta"></select>
                    <br></br>
                    <p className="p2">Distance from location:</p>
                    <input type="text" placeholder="0" className="textinput"></input>
                    <p className="p3">km</p>
                    <br></br>
                    <p className="p4">Choose Date:</p>
                    <div id="cal"><Calender></Calender></div>
                    <p>Select Activity Type: </p>
                    <div className="pos">
                        <input type="radio" id="fac1" name="act" className="cbox"></input>
                        <label for="fac1">Fitness and Wellness</label>
                    </div>
                    <div className="pos">
                        <input type="radio" id="fac2" name="act" className="cbox"></input>
                        <label for="fac2">Meditational and Spiritual</label>
                    </div>
                    <div className="pos">
                        <input type="radio" id="fac3" name="act" className="cbox"></input>
                        <label for="fac3">Arts and Exhibitions</label>
                    </div>
                    <div className="pos">
                        <input type="radio" id="fac4" name="act" className="cbox"></input>
                        <label for="fac4">Picnics and Sightseeing</label>
                    </div>
                    <div className="but">
                        <input type="button" value="Search"></input>    
                    </div>
                    
                </div>
                <div className="map">
                    {/* map range */}

                </div>
                <div className="res">
                    <div className="res1">
                        <p></p><img></img>
                    </div>
                    <div className="res2">
                        <p></p><img></img>
                    </div>
                </div>
            </div>
            
        </div>
    )

};

export default SocialActivity;