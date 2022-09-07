import "./SearchPage.css";
import pic7 from '../images/SearchActivity.png';

const SearchPage = () =>{

    return (
        <div>
            <header class="w3-display-container w3-content w3-wide" className="home">
                <img class="w3-image" src={pic7} alt="" width="1500" height="800"></img>
            </header>
            <h2>Find you Aged Care Home</h2>
            <div className="w3-padding-32 w3-white">
                <div className="w3-row-padding">
                <div className="w3-col 16 m6">
                    <p>Search Suburb: </p>
                    <input type="text" className="texta w3-margin-right"></input>
                    <button class="w3-button w3-round w3-black w3-tiny">Add</button>
                    <div className="fcbox">
                        <p>Type of Facility: </p>
                        <input type="checkbox" id="fac1" class="cbox"></input>
                        <label for="fac1">Residential</label>
                        <br></br>
                        <input type="checkbox" id="fac2" class="cbox"></input>
                        <label for="fac2">Home Care</label>
                        <br></br>
                        <input type="checkbox" id="fac3" class="cbox"></input>
                        <label for="fac3">Multi-Purpose Service</label>
                        <br></br>
                        <input type="checkbox" id="fac4" class="cbox"></input>
                        <label for="fac4">Short Term Restorative Care</label>
                        <br></br>
                        <input type="text" className="textnone w3-margin-right"></input>
                        <button class="w3-button w3-round w3-black w3-tiny">Search</button> 
                    </div>
                </div>
                <div class="w3-col l6 m6">
                    <img src="/w3images/img_app.jpg" class="w3-image w3-right w3-hide-small" width="335" height="471"></img>
                    <div class="w3-center w3-hide-large w3-hide-medium">
                        <img src="/w3images/img_app.jpg" class="w3-image w3-margin-top" width="335" height="471"></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
        

    )

};

export default SearchPage;