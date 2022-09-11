// import ResNav from "../ResNav/resNav";
import axios from "axios";


const Seventh = () => {

    // function search() {
    //     alert('Wrong suburb ')
    // }
    return (
        <div>
            <input type="button" onClick={getList()} value="Search" />
            <div id="content"> </div>
            {/* <button onClick={() => search()}>搜索</button> */}
        </div>
        // <ResNav></ResNav>

    )

    function getList() {


        // axios.get('http://54.252.238.6:8000/api/services/', {
        //     format: 'json',
        //     q: 'clayton'
        // }).then(res => {
        //     debugger
        // }).catch(err => {
        //     debugger
        // })

        axios.request({
            method: 'get',
            baseURL: 'http://54.252.238.6:8000/api/services/?format=json&q=clayton',            

        }).then(
            res => {
                console.log("get res:", res);
                var str = JSON.stringify(res);
                document.getElementById("content").innerHTML = str;

            }, error => {
                console.log("get request failed:", error);
                document.getElementById("content").innerHTML = error;
            }
        );
    };
};

export default Seventh;