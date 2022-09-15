import "./SearchPage.css";
import pic8 from '../images/SearchAged.png';
import Map from "../map/map";
import axios from "axios";
import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { alertTitleClasses } from "@mui/material";
import { useEffect, useState } from 'react';

const SearchPage = () => {

    let sendData = {
        latitude: [],
        longitude: [],
        addressNew: [],
        serviceName: []
    }

    const [rows, setRows] = useState([]);

    let searchResult = [];
    function getList() {
        let suburb = document?.getElementById('suburb')?.value;

        // 获取多选框值
        var careTypeArr = [];
        var checkHTMLList = document.getElementsByClassName('cbox');
        for (let i in checkHTMLList) {
            if (checkHTMLList[i].checked) {
                careTypeArr.push(checkHTMLList[i].value)
            }
        }

        // var careTypeMap =  new Map(careTypeArr.map((o)=>[o,{careType:o}]))
        // debugger
        //是字符串形式
        // var careTypeStr = careTypeArr.join(',')
        axios.request({
            method: 'get',
            baseURL: `http://54.252.238.6:8000/api/search/?format=json&q=${suburb}`
        }).then(
            res => {
                var list = res.data;//搜索返回数据
                if (list.length === 0) {
                    //空数据处理方式 - alert
                    alert('No this suburb data.')
                } else {
                    if (careTypeArr.length === 0) {
                        //careType 未选择
                        alert('Please choose the Care Type you want.')
                    } else {
                        searchResult = list.filter(item => careTypeArr.some(value => value === item.care_type))
                        // alert(`筛选后数据还有${searchResult.length}条`)
                        // alert(`${sName}`)

                    }
                }
                setRows(searchResult)

                //
                // if(rows.sName === []){
                //     searchResult.forEach(item => rows.sName.push(item.service_name))
                //     searchResult.forEach(item => rows.pName.push(item.provider_name))
                //     searchResult.forEach(item => rows.stt.push(item.state))
                //     searchResult.forEach(item => rows.pCode.push(item.post_code))
                //     searchResult.forEach(item => rows.address.push(item.address_1))
                //     searchResult.forEach(item => rows.suburb.push(item.suburb))
                //     searchResult.forEach(item => rows.caretype.push(item.care_type))
                //     searchResult.forEach(item => rows.orgtype.push(item.org_type))
                //     searchResult.forEach(item => rows.plregion.push(item.planning_region_2019))
                // }else{
                //     rows.sName = []
                //     rows.pName = []
                //     rows.stt = []
                //     rows.pCode = []
                //     rows.address = []
                //     rows.suburb = []
                //     rows.caretype = []
                //     rows.orgtype = []
                //     rows.plregion = []
                //     searchResult.forEach(item => rows.sName.push(item.service_name))
                //     searchResult.forEach(item => rows.pName.push(item.provider_name))
                //     searchResult.forEach(item => rows.stt.push(item.state))
                //     searchResult.forEach(item => rows.pCode.push(item.post_code))
                //     searchResult.forEach(item => rows.address.push(item.address_1))
                //     searchResult.forEach(item => rows.suburb.push(item.suburb))
                //     searchResult.forEach(item => rows.caretype.push(item.care_type))
                //     searchResult.forEach(item => rows.orgtype.push(item.org_type))
                //     searchResult.forEach(item => rows.plregion.push(item.planning_region_2019))
                // }
                if (sendData.latitude.length === 0) {
                    searchResult.forEach(item => sendData.latitude.push(item.lat))
                    searchResult.forEach(item => sendData.longitude.push(item.lon))
                    searchResult.forEach(item => sendData.serviceName.push(item.service_name))
                    searchResult.forEach(item => sendData.addressNew.push(item.address_1))
                } else {
                    sendData.latitude = []
                    sendData.longitude = []
                    sendData.serviceName = []
                    sendData.addressNew = []
                    searchResult.forEach(item => sendData.latitude.push(item.lat))
                    searchResult.forEach(item => sendData.longitude.push(item.lon))
                    searchResult.forEach(item => sendData.serviceName.push(item.service_name))
                    searchResult.forEach(item => sendData.addressNew.push(item.address_1))
                }




                // let fLine = []
                // for (let i = 0; i < searchResult.length; i++) {
                //     // document.getElementsById('fline').innerHTML = sName[i]
                //     // document.getElementsById()
                //     fLine.push(sName[i] + "\n" + address[i] + ',' + suburb[i] + ',' + state1[i] + ' ' + pCode[i] + "\n"
                //         + "Care_Type: " + caretype[i] + '\n'
                //         + "Provider: " + provider[i] + "\n"
                //         + "Organization Type: " + orgtype[i] + '\n'
                //         + "2019 Planning Region: " + plregion[i] + '\n' + '\n' + '\n' + '\n')
                // }



                // const serName = [fLine]
                // const firstLine = (
                //     serName.map((name, value) => <p className="overformat" key={value}>{name}</p>)
                // )

                // ReactDOM.render(firstLine, document.getElementById('fline'))
                // // document.getElementById("content").innerHTML = str;
            }, error => {
                console.log("get request failed:", error);
                document.getElementById("content").innerHTML = error;
            }
        );
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
                            <button class="w3-button w3-round w3-black w3-tiny w3-right" onClick={() => getList()}>Search</button>
                        </div>
                        <Map sendData={sendData}></Map>
                    </div>
                    <div class="w3-col l6 m6">
                        <div id="scrollchoose">
                            {rows.map((row) => (
                                <div id="resframe">
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