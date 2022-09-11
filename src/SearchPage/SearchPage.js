import "./SearchPage.css";
import pic7 from '../images/SearchActivity.png';
import Map from "../map/map";
import axios from "axios";
import { alertTitleClasses } from "@mui/material";

const SearchPage = () => {

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
                    alert('暂无数据；')
                } else {
                    if (careTypeArr.length === 0) {
                        //careType 未选择
                        alert('CareType选择数据为空')
                    } else {
                        searchResult = list.filter(item => careTypeArr.some(value => value === item.care_type))
                        alert(`筛选后数据还有${searchResult.length}条`)
                    }
                }


                // document.getElementById("content").innerHTML = str;

            }, error => {
                console.log("get request failed:", error);
                document.getElementById("content").innerHTML = error;
            }
        );
    }
    return (
        <div>
            <header class="w3-display-container w3-content w3-wide" className="home">
                <img class="w3-image" src={pic7} alt="" width="1500" height="800"></img>
            </header>
            <h2>Find you Aged Care Home</h2>
            <hr id="hr1" className="w3-blue"></hr>
            <div className="w3-padding-32 w3-white">
                <div className="w3-row-padding">
                    <div className="w3-col 16 m6">
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
                        <Map markerList={searchResult}></Map>
                    </div>
                    <div class="w3-col l6 m6">
                        <p>a</p>
                    </div>
                </div>
            </div>
            <footer class="w3-container w3-padding-64 w3-center w3-blue"></footer>
        </div>


    )


};

export default SearchPage;