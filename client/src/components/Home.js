import React from 'react'
import DemoCarousel from './Carousel.js'

const Home = (props) => {
    return (
        <div className="homeDiv">
            <DemoCarousel/>
            <div className="homeText">
                <p>Three full stack coders opened Full Stack Pizza on July 26, 2019.</p><br/>
                <p>Each Pizza is hancrafted by the master himself, Eric Mauerman, 
                    who spent over 29 years in Florence Italy mastering his pizza. 
                    With the two business owners, Carlos Colon and Moroni Allred, 
                    lending their support in the Full Stack kitcken. Many of the 
                    ingredients are imported from Italy and forms a taste that can't be 
                    replicated. In his custom brick oven, Eric has articulated 
                    each mouthwatering pizza.</p><br/> 
                <p>Today, the three full stack coders continue to operate in the Salt 
                    Lake City downtown area</p>   
            </div>
        </div>
    )
}

export default Home