import React from "react";
import home from "../../assets/home.jpeg"
import Services from "../services/services"


import './home.css'
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
const Home = () => {
    return (
        <>
        <div className="final">
        <div className="img">
            <img src={home} alt="" width="600px" height="420px"/>
        </div>
        <div className="text">
        <h1 style={{color:"black"}}>We are full Services</h1>
        <h1 style={{color:"#079dd2"}}>Digital Marketing Agency</h1>
        <h2 style={{color:"#079dd2"}}>Welcome to the Digital Impacts</h2>
        <div className="blue"></div>
        <p>We partner with our clients with a team of professionals, we are able to provide <br />
        the best on our side. We strive to be leaders in digital marketing services worldwide <br />
        by revolutionizing the industry and setting new standards of professionalism and success.</p>
               <button className="now">Message Us Now</button>
        </div>
        </div>
        <Services/>
        <About/>
        <Portfolio/>
        </>
    )
}
export default Home