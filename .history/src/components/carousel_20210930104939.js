import React from 'react';
import { Carousel } from 'antd';

var windowsWidth = window.innerWidth;
var imageWidth = windowsWidth / 2;


const centerStuff = {
    height: imageWidth / 1.4,
    width: imageWidth,
    margin: "auto"
}

export default function carousel() {
    return (
        <Carousel autoplay speed="1000">
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg"
                    style={centerStuff}
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                    style={centerStuff}
                    alt=""
                /> 
            </div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"
                    style={centerStuff}
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg"
                    style={centerStuff}
                    alt=""
                />
            </div>
        </Carousel>

    )
}
