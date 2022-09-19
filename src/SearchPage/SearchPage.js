import "./SearchPage.css";
import pic8 from '../images/SearchAged.png';
import axios from "axios";
import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { alertTitleClasses } from "@mui/material";
import { useState } from 'react';

const SearchPage = () => {

    // let sendData = {
    //     latitude: [],
    //     longitude: [],
    //     addressNew: [],
    //     serviceName: []
    // }
    const [rows, setRows] = useState([]);
    const [sendLatitude, setLatitude] = useState([]);
    const [sendLongitude, setLongitude] = useState([]);
    const [sendAddressNew, setLaddressNew] = useState([]);
    const [sendServiceName, setServiceName] = useState([]);
    const [order, setOrder] = useState('');
    const data = {
        sendLatitude, sendLongitude, sendAddressNew, sendServiceName, order
    }


    let searchResult = [];
    function getList() {
        const axios = require('axios');
        var HttpsProxyAgent = require('https-proxy-agent');
        let suburb = document?.getElementById('suburb')?.value;

        // 获取多选框值
        var careTypeArr = [];
        var checkHTMLList = document.getElementsByClassName('cbox');
        for (let i in checkHTMLList) {
            if (checkHTMLList[i].checked) {
                careTypeArr.push(checkHTMLList[i].value)
            }
        }

        axios.get('/api/search/?format=json&q='+`${suburb}`, {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json",
            },
            proxy: false,
            httpsAgent: new HttpsProxyAgent.HttpsProxyAgent(`https://uvprotect.me/api/search/?format=json&q=${suburb}`)
        }).then(
            function (res) {
                var list = res.data;//搜索返回数据
                console.log('Returned Data:');
                console.log(list);
                console.log('headers:');
                console.log(res.headers);
                if (suburb.length === 0) {
                    //空数据处理方式 - alert
                    alert('Please input the suburb or postcode.')
                } else {
                    if (careTypeArr.length === 0) {
                        alert('Please choose the Care Type you want.')
                    } else {
                        searchResult = list.filter(item => careTypeArr.some(value => value === item.care_type))
                    }
                }

                let latitude = []
                let longitude = []
                let addressNew = []
                let serviceName = []

                searchResult.forEach(item => {
                    latitude.push(item.lat)
                    longitude.push(item.lon)
                    serviceName.push(item.service_name)
                    addressNew.push(item.address_1)
                })

                setRows(searchResult)
                setLatitude(latitude)
                setLongitude(longitude)
                setLaddressNew(serviceName)
                setServiceName(addressNew)
                setOrder(new Date().getTime())
                // setMap()
            }, error => {
                console.log("get request failed:", error);
                document.getElementById("content").innerHTML = error;
            }
        ).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <header class="w3-display-container w3-content w3-wide" className="home">
                <img class="w3-image" src={pic8} alt="" width="1500" height="800"></img>
            </header>
            <h2 className="w3-padding">Find you Aged Care Home</h2>
            <hr id="hr1" className="w3-blue"></hr>
            <div className="w3-padding-32 w3-white">
                <div className="w3-row-padding">
                    <div className="w3-col 16 m6" id="boxtop">
                        <p>Search Suburb: </p>
                        <input type="text" className="texta w3-margin-right" placeholder="Search..." name="suburb" id="suburb"></input>
                        <div className="fcbox">
                            <p>Type of Facility: </p>
                            <input type="checkbox" id="careType" name="fac1" value="Residential" class="cbox"></input>
                            <label htmlFor="careType">Residential</label>
                            <br></br>
                            <input type="checkbox" id="careType1" name="fac2" value="Home Care" class="cbox"></input>
                            <label htmlFor="careType1">Home Care</label>
                            <br></br>
                            <input type="checkbox" id="careType2" name="fac3" value="Multi-Purpose Service" class="cbox"></input>
                            <label htmlFor="careType2">Multi-Purpose Service</label>
                            <br></br>
                            <input type="checkbox" id="careType3" name="fac4" value="Short Term Restorative Care" class="cbox"></input>
                            <label htmlFor="careType3">Short Term Restorative Care</label>
                            <br></br>
                            <input type="checkbox" id="careType4" name="fac5" value="Transition Care" class="cbox"></input>
                            <label htmlFor="careType4">Transition Care</label>
                            <br></br>
                            <input type="checkbox" id="careType5" name="fac6" value="Innovative Pool" class="cbox"></input>
                            <label htmlFor="careType5">Innovative Pool</label>
                            <br></br>
                            <input type="checkbox" id="careType6" name="fac7" value="National Aboriginal and Torres Strait Islander Aged Care Program" class="cbox"></input>
                            <label htmlFor="careType6">National Aboriginal and Torres Strait Islander Aged Care Program</label>
                            <br></br>
                            <input type="text" className="textnone w3-margin-right"></input>
                            <button class="w3-button w3-round w3-black w3-tiny w3-right" onClick={() => getList()}>Search</button>
                        </div>
                        {/* <Map data={data}></Map> */}
                    </div>
                    <div class="w3-col l6 m6">
                        <div id="scrollchoose">
                            {rows.map((row, index) => (
                                <div id="resframe" key={index}>
                                    <h4 id="h4frame">{row.service_name}</h4>
                                    <p>{row.address_1},&nbsp;{row.suburb},&nbsp;{row.state}&nbsp;{row.post_code}</p>
                                    <p>Care&nbsp;Type:&nbsp;{row.care_type}</p>
                                    <p>Provider:&nbsp;{row.provider_name}</p>
                                    <p>Organization&nbsp;Type:&nbsp;{row.org_type}</p>
                                    <p>2019&nbsp;Planning&nbsp;Region:&nbsp;{row.planning_region_2019}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer class="w3-container w3-padding-64 w3-center w3-blue"></footer>
        </div>

    )


};

export default SearchPage;
