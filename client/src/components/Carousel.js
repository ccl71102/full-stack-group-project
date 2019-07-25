import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render(){
        return (
            <Carousel autoPlay={false}>
                <div>
                    <img src="http://www.restaurantnews.com/wp-content/uploads/2015/03/Villa-Italian-Kitchen-Introduces-3-Cheese-Pizza-to-Menu.jpg" alt=""/>
                    <p className="legend">Cheese</p>
                </div>
                <div>
                    <img src="http://sgtpepps.com/wp-content/uploads/2017/03/theworks.jpg" alt=""/>
                    <p className="legend">Supreme</p>
                </div>
                <div>
                    <img src="https://assets.blog.foodnetwork.ca/wp-content/uploads/sites/6/2016/04/hawaiian-pizza.jpg" alt=""/>
                    <p className="legend">Hawaiian</p>
                </div>
                <div>
                    <img src="https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/62/77/5/q3aIFlQC6nYPNGRxMqA5_pz3.jpg" alt=""/>
                    <p className="legend">Greek</p>
                </div>
                <div>
                    <img src="https://live.staticflickr.com/5513/9348562946_ff2c3a251e_b.jpg" alt=""/>
                    <p className="legend">White</p>
                </div>
            </Carousel>
        )
    }
}

export default DemoCarousel