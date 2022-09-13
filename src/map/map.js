import React from 'react'
import './map.css'
// import axios from "axios";



export default class Map extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         markerList: [longitude]
    //     }
    // }

    componentDidMount() {
        let{latitude,longitude,addressNew,serviceName} = this.props.sendData
        const map = new window.BMapGL.Map('container');

        for(let i = 0;i < latitude.length;i++){
            var point = new window.BMapGL.Point(longitude[i],latitude[i]);

            map.centerAndZoom(point, 15)

            var marker = new window.BMapGL.Marker(point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            var opts = {
                width: 200,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title: "Information", // 信息窗口标题
                message: serviceName[i]
            }
            var infoWindow = new window.BMapGL.InfoWindow(addressNew[i], opts);  // 创建信息窗口对象 
            marker.addEventListener("click", function () {
                map.openInfoWindow(infoWindow, point); //开启信息窗口S
            });
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