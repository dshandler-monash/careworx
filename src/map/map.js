import React from 'react'
import './map.css'
import axios from "axios";


export default class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            markerList: []
        }
    }

    componentDidMount() {
        const map = new window.BMapGL.Map('container');

        var point = new window.BMapGL.Point(144.96328, -37.814107);

        map.centerAndZoom(point, 15)

        var marker = new window.BMapGL.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        var opts = {
            width: 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title: "故宫博物院", // 信息窗口标题
            message: "这里是故宫"
        }
        var infoWindow = new window.BMapGL.InfoWindow("地址:北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象 
        marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, point); //开启信息窗口S
        });
    }
    render() {
        return (
            <div className="map">
                <div id="container" />
            </div>
        )
    }
}