import React from "react";
 import hospitality from "../../assets/hospitality.jpeg"
 import education from "../../assets/download.jpeg"
 import commerce from "../../assets/commerce.jpeg"
 import realestate from "../../assets/realestate.jpeg"
 import healthcare from "../../assets/healthcare.jpeg"
 import fintech from "../../assets/fintech.jpeg"


import './services.css'
const Services = () => {
    return (
        <>
        <div className="correct">
        <center>
         <h1>We <b style={{color:"#079dd2"}}>Provide</b> The Best</h1>
            <h1>Services With <b style={{color:"#079dd2"}}>Our</b></h1>
            <h1 style={{color:"#079dd2"}}>Developers</h1>
        </center>
        <div className="arrangement">
            <div className="each-box">
         <center>
            <h2>Digital Marketing</h2>
            <div className="icon"><i class="fa-solid fa-gears"></i></div>
            <p>The <b style={{color:"#0796d6"}}>Digital Impacts</b> have compiled a list of the best digital marketing companies in the world.</p>
         </center>
            </div>
            <div className="each-box">
         <center>
            <h2>Web Development</h2>
            <div className="icon"><i class="fa-brands fa-space-awesome"></i></div>
            <p>Web design services comprise the process of user interface <b style={{color:"#0796d6"}}>(UI) </b>and user experience <b style={{color:"#0796d6"}}>(UX) </b>design of any web-based solution.
            </p>
         </center>
            </div>
            <div className="each-box">
         <center>
            <h2>Graphic Designing</h2>
            <div className="icon"><i class="fa-solid fa-film"></i></div>
            <p>Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design
            </p>
         </center>
            </div>
        </div>
         <div className="arrangement">
            <div className="each-box">
         <center>
            <h2>Content Writter</h2>
            <div className="icon"><i class="fa-solid fa-file-pen"></i></div>
            <p>That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media
           </p>
         </center>
            </div>
            <div className="each-box">
         <center>
            <h2>SEO</h2>
            <div className="icon"><i class="fa-solid fa-brain"></i></div>
            <p>Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search querie.</p>
         </center>
            </div>
            </div>
            <center>
                <h1>Industries We</h1>
                <h1>Work With</h1>
                <p>We work as a technology partner for various industries <br />Our expertise can be applied to the specific demands
            and nuances in your industry</p>
            </center>
            <div className="wrap">
            <div className="sections">
               <div className="direction">
                 <img src={hospitality} alt="" width="240px" height="200px"/>
                 <h3>HOSPITALITY</h3>
                 </div>
                 <div className="direction">
                <img src={education} alt="" width="240px" height="220px"/>
                <h3>EDUCATION</h3>
                </div>
                <div className="direction">
                <img src={commerce} alt="" width="240px" height="220px"/> 
                <h3>COMMERCE</h3>
                </div>
            </div>
            <div className="sections">
               <div className="direction">
               <img src={realestate} alt=""  width="240px" height="230px" />
                <h3>REAL ESTATE</h3>
               </div>
               <div className="direction">
               <img src={healthcare} alt="" width="240px" height="220px"/> 
               <h3>HEALTH CARE</h3>
               </div>
               <div className="direction">
               <img src={fintech} alt="" width="240px" height="220px"/> 
               <h3>FINTECH</h3>
               </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Services