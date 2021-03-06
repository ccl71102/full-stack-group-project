import React from 'react'
import DemoCarousel from './Carousel.js'

const Home = (props) => {
    return (
        <div className="homeDiv">
            <DemoCarousel/>
            <div className="homeText">
                <p>Three full stack coders opened Full Stack Pizza on July 26, 2019.</p><br/>
                <p>Each Pizza is handcrafted by the master himself, Eric Mauerman, 
                    who spent over 29 years mastering his pizza in Florence, Italy. 
                    With the two business owners, Carlos Colon and Moroni Allred, 
                    lending their support in the Full Stack kitcken. Many of the 
                    ingredients are imported from Italy and form a taste that can't be 
                    replicated. In his custom brick oven, Eric has articulated 
                    each mouthwatering pizza.</p><br/> 
                <p>Today, the three full stack coders continue to operate in the Salt 
                    Lake City downtown area.</p>
                <button onClick={() => props.history.push("/menu")} className="homeButton">Start Your Order! </button>
            </div>
        </div>
    )
}

export default Home