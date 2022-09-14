import './SearchActivities.css'
import pic7 from '../images/SearchActivity.png';
import * as React from 'react';
// import Map from "../map/map";
// import axios from "axios";
// import ReactDOM from 'react-dom';
// import { alertTitleClasses } from "@mui/material";
// import {useEffect,useState} from 'react';

// function createData(sName,address,suburb,state1,postcode,caretype,provider,orgtype,plregion){
//     return { sName,address,suburb,state1,postcode,caretype,provider,orgtype,plregion };
// }   

// const rows=[createData(sName,address,suburb,state1,postcode,caretype,provider,orgtype,plregion)]

// const handleClick = () =>{
//     const data = {query: 'clayton'}
//     fetch(`http://54.252.238.6:8000/api/search/?format=json&q=${suburb}`,{
//         method: 'get',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Success',data);
//     setResUrl();
//     })


// }

export default function searchactivities (){
    // const [ResURL,setResURL] = useState('');
return (
    <div>
        <header class="w3-display-container w3-content w3-wide" className="home">
            <img class="w3-image" src={pic7} alt="" width="1500" height="800"></img>
        </header>   
        <h2>Find Activities</h2>
        <hr id="hr1" className="w3-blue"></hr>
        <div className="w3-padding-32 w3-white">
            <div className="w3-row-padding">
                <div className="w3-col 16 m6">
                    <h3>Search Criteria:</h3>
                    <p>Search Suburb: </p>
                    <input type="text" className="texta w3-margin-right" placeholder="Search..." name="suburb" id="suburb"></input>
                    <div className="fcbox">
                        <p>Type of Facility: </p>
                        <input type="checkbox" id="careType" name="fac1" value="Residential" class="cbox"></input>
                        <label for="fac1">Residential</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac2" value="Home Care" class="cbox"></input>
                        <label for="fac2">Home Care</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac3" value="Multi-Purpose Service" class="cbox"></input>
                        <label for="fac3">Multi-Purpose Service</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac4" value="Short Term Restorative Care" class="cbox"></input>
                        <label for="fac4">Short Term Restorative Care</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac5" value="Transition Care" class="cbox"></input>
                        <label for="fac5">Transition Care</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac6" value="Innovative Pool" class="cbox"></input>
                        <label for="fac6">Innovative Pool</label>
                        <br></br>
                        <input type="checkbox" id="careType" name="fac7" value="National Aboriginal and Torres Strait Islander Aged Care Program" class="cbox"></input>
                        <label for="fac7">National Aboriginal and Torres Strait Islander Aged Care Program</label>
                        <br></br>
                        <input type="text" className="textnone w3-margin-right"></input>
                        <button class="w3-button w3-round w3-black w3-tiny w3-right">Search</button>
                    </div>
                    <p>a</p>
                </div>
                <div class="w3-col l6 m6">
                    <div className="scrollchoose">
                        {/* {rows.map((row) => (
                            <div id="resframe">
                                <h4>{row.sName}</h4>
                                <p>{row.address},{row.suburb},{row.state1}&nbsp;{row.postcode}</p>
                                <p>Care&nbsp;Type:&nbsp;{row.caretype}</p>
                                <p>Provider:&nbsp;{row.provider}</p>
                                <p>Organization&nbsp;Type:&nbsp;{row.orgtype}</p>
                                <p>2019&nbsp;Planning&nbsp;Region:&nbsp;{row.plregion}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
        <footer class="w3-container w3-padding-64 w3-center w3-blue"></footer>
    </div>

)}
