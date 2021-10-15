import React from 'react';
import { Carousel } from 'antd';
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"


var windowsWidth = window.innerWidth;
var imageWidth = windowsWidth / 2;


const centerStuff = {
    height: 0,
    paddingTop: "56.25%" // 16:9
  
}

export default function carousel() {
    return (
        <Carousel autoplay speed="1000">
            <div>
                <img
                    src={pic1}
                    style={centerStuff}
                    alt=""
                />
            </div>
            <div>
                <img
                    src={pic2}
                    style={centerStuff}
                    alt=""
                /> 
            </div>
            <div>
                <img
                    src={pic3}
                    style={centerStuff}
                    alt=""
                />
            </div>
            <div>
                <img
                    src={pic4}
                    style={centerStuff}
                    alt=""
                />
            </div>
        </Carousel>

    )
}
