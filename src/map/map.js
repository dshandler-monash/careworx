import React from 'react'
import './map.css'
// import axios from "axios";



export default class Map extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.data.order !== nextProps.data.order) {
            let { sendLatitude, sendLongitude, sendAddressNew, sendServiceName } = nextProps.data
            console.log(nextProps.data)
            const map = new window.BMapGL.Map('container');
            if (!!sendLatitude && !!sendLatitude.length > 0) {
                let marks = []
                for (let i = 0; i < sendLatitude.length; i++) {
                    var point = new window.BMapGL.Point(sendLongitude[i], sendLatitude[i]);
                    var marker = new window.BMapGL.Marker(point);  // 创建标注
                    map.centerAndZoom(point, 15)
                    marks.push(marker)
                    map.addOverlay(marker);              // 将标注添加到地图中
                    // var opts = {
                    //     width: 200,     // 信息窗口宽度
                    //     height: 100,     // 信息窗口高度
                    //     title: "Information", // 信息窗口标题
                    // }
                    // var infoWindow = new window.BMapGL.InfoWindow(sendAddressNew[i], opts);  // 创建信息窗口对象 
                    // marker[i].addEventListener("click", function () {
                    //     map.openInfoWindow(infoWindow, point); //开启信息窗口S
                    // });
                }

                for (let i = 0; i < marks.length; i++) {
                    (function () {
                        let index = i;
                        let opts = {
                            width: 200,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title: sendServiceName[i]
                        }
                        marks[i].addEventListener('click', function () {
                            this.openInfoWindow(new window.BMapGL.InfoWindow(sendAddressNew[i], opts));
                        });
                    })();
                }
            }
        }
    }
    render() {
        return (
            <div className="map">
                <div id="container" />
            </div>
        )
    }
}