import './FindHome.css'
import Map from '../map/map';




const FindHome = () =>{

    return (
        <div className="cared">
            <img src="https://agedcareonline.com.au/uploads/netbookings/id7346/Business/FeaturedThumbs/waterview-featured.jpg"></img>
            <div className="temp">
                <h1>Find Your Aged Care Home</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <p>Search Suburb: </p>
                <select className="texta"></select>
                <div className="butt">
                    <input type="button" value="Search"></input>
                    <input type="button" value="Add"></input>
                </div>
                <div className="fcbox">
                    <p>Type of Facility: </p>
                    <input type="checkbox" id="fac1" class="cbox"></input>
                    <label for="fac1">Residential</label>
                    <input type="checkbox" id="fac2" class="cbox"></input>
                    <label for="fac2">Home Care</label>
                    <input type="checkbox" id="fac3" class="cbox"></input>
                    <label for="fac3">Multi-Purpose Service</label>
                    <input type="checkbox" id="fac4" class="cbox"></input>
                    <label for="fac4">Short Term Restorative Care</label>
                </div>
                <div>
                    {/* map */}                  {/*map range */}
                </div>
                <p className='result'>Results:</p>
                <div className="res1">
                    <div className='res2'><p>1</p></div>
                    <br></br>
                    <div className='res2'></div>
                </div>
            </div>
        </div>

    )

};

export default FindHome;