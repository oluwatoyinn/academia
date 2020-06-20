import React, { Component } from 'react'
import { Carousel }  from 'react-bootstrap'
import SlidingTitle from './SlidingTitle'

class Sliding extends Component {
    render() {
        return (
            <>
            <div id="slider">
                    <Carousel className="carousel">
                        <Carousel.Item className="item">
                            <img
                            className="d-block w-100"
                            src="img/class.jpg"
                            alt="First slide"
                            />
                            <div className=" caption caro_image">
                            <SlidingTitle name="find your perfect tutor" title="Book one-on-one lessons with verified instructors in your area" />
                           
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="item">
                            <img
                            className="d-block w-100"
                            src="img/teach.jpg"
                            alt="Third slide"
                            />

                            <div className=" caption caro_image ">
                            <SlidingTitle name="find your perfect tutor" title="Book one-on-one lessons with verified instructors in your area" />
                           
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="item">
                            <img
                            className="d-block w-100"
                            src="img/class.jpg"
                            alt="Third slide"
                            />

                            <div className="caption caro_image ">
                            <SlidingTitle name="find your perfect tutor" title="Book one-on-one lessons with verified instructors in your area" />
                           
                            </div>
                        </Carousel.Item>
                </Carousel> 
                </div>
            </>
        )
    }
}

export default Sliding
