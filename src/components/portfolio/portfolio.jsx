import React from "react";
import aws from '../../assets/aws.png'
import flower from '../../assets/flower.png';
import wlogo from '../../assets/wlogo.png'
import revive from '../../assets/revive.jpeg'
import voeux from '../../assets/voeux.jpeg'
import portfolio from '../../assets/portfolio.jpeg'
import unifresh from '../../assets/unifreash.jpeg'
import './portfolio.css'
const Portfolio = () => {
    return (
        <>
        <div className="start">
        <h1>Projects We've Deliverd</h1>
        <p>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps <br /> related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
        </div>
        <div className="mega-class">
        <div className="apply">
        <div className="vertical">
            <h3>INDUSTRY</h3>
            <h1>REVIVE</h1>
            <p>Revive Beauty Salon & Institute</p>
            <span><i class="fa-solid fa-clipboard-list"></i> WEB DEVELOPMENT</span>
            <span> <i class="fa-solid fa-clipboard-list"></i> QUALITY ASSURANCE</span>
            <div className="collect"><img src={flower} alt="" height={40} width={50} />
                <img src={aws} alt="" height={40} width={50} /></div>
        </div>
        <div>
                <img src={revive} alt="" height={500} width={480} />
        </div>
        </div>
        <div className="apply">
        <div>
                <img src={voeux} alt="" height={500} width={480} />
        </div>
        <div className="vertical">
            <h3>INDUSTRY</h3>
            <h1>Voeux</h1>
            <p>Natural Skin Care</p>
            <span><i class="fa-solid fa-clipboard-list"></i> WEB DEVELOPMENT</span>
            <span> <i class="fa-solid fa-clipboard-list"></i> QUALITY ASSURANCE</span>
            <div className="collect"><img src={wlogo} alt="" height={40} width={50} />
                <img src={aws} alt="" height={40} width={52} /></div>
        </div>
        </div>
        <div className="apply">
        <div className="vertical">
            <h3>INDUSTRY</h3>
            <h1>KINGZ</h1>
            <p>Ecommerce Website</p>
            <span><i class="fa-solid fa-clipboard-list"></i> WEB DEVELOPMENT</span>
            <span> <i class="fa-solid fa-clipboard-list"></i> QUALITY ASSURANCE</span>
            <div className="collect"><img src={flower} alt="" height={40} width={50} />
                <img src={aws} alt="" height={40} width={52} /></div>
        </div>
        <div className="picture">
                <img src={portfolio} alt="" height={500} width={480} />
        </div>
        </div>
        <div className="apply">
        <div>
                <img src={unifresh} alt="" height={500} width={480} />
        </div>
        <div className="vertical">
            <h3>INDUSTRY</h3>
            <h1>REVIVE</h1>
            <p>Revive Beauty Salon & Institute</p>
            <span><i className="locate" class="fa-solid fa-clipboard-list"></i> WEB DEVELOPMENT</span>
            <span> <i class="fa-solid fa-clipboard-list"></i> QUALITY ASSURANCE</span>
            <div className="collect"><img src={flower} alt="" height={40} width={50} />
                <img src={aws} alt="" height={40} width={52} /></div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Portfolio