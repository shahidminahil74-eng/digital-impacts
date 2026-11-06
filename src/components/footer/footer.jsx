import React from "react";
import usa from '../../assets/usa.jpeg'
import uk from '../../assets/uk.jpeg'
import canada from '../../assets/canada.jpeg'

import './footer.css'
const Footer = () => {
    return (
        <>
        <center>
        <h1>Feel Free To Contact Us By Submitting</h1>
        <h1 style={{color:"#0976d6"}}>Form Or Contact Live Support</h1>
        </center>
        <div className="special">
            <div className="nested">
         <div> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108841.82419019792!2d74.1355505972656!3d31.5157269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a24f371795%3A0x74beee8aa43e49d5!2sPNY%20Trainings%20-%20Iqbal%20Town%20Branch!5e0!3m2!1sen!2s!4v1793532223670!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
         </div> 
         <div className="phone">
          <div className="star">
            <div className="paint"><i class="fa-solid fa-phone"></i></div>
            <div>
            <p> +4466778899</p>
            <p> +4466778899</p>
            </div>
            </div>
          <div className="paint"><i class="fa-solid fa-envelope"></i> info@thedigitalimpacts.com</div>
         </div>
         </div>
        <div className="form">
        <form action="" >
            <div className="group">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="your name" />
            </div>
            <div className="group">
             <label htmlFor="">Surname</label>
            <input type="text" placeholder="your surname" />
            </div>
            <div className="group">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="your email address" />
            </div>
            <div className="group">
            <label htmlFor="">Contact</label>
            <input type="text" placeholder="123-456-789"/>
            </div>
            <div className="group">
                <button className="submit">Submit</button>
            </div>
        </form>
        </div>
        </div>
        <section>
            <center>
            <div className="align">
                <div className="thick-line"></div>
                <h1 className="heading1">Let's Work Together</h1>
                <p>Driving your business forward with strong marketing strategies <br /> Get a free consultation to make this happen!
       </p>
       <button className="call">Let's Connect</button>
            </div>
            </center>
            <div className="background">
            <div className="table">
                <div className="cook">
            <h2>COMPANY</h2>
            <div>About Us <br />Why Choose Us <br />Team <br />Pricing & Plans <br />Contacts <br />
Investors</div>
</div>
<div className="cook">
          <h2>SERVICES</h2>
          <div>Web Design & Development <br /> Why Choose Us <br />Specialized SEO Services <br />Specialized Social Services
 <br />Specialized Graphics Services <br />Investors</div>
 </div>
 <div className="cook">
         <h2>RESOURCES</h2>
         <div>Portfolio <br />Terms of Services <br />Help & FAQ <br />Contact Us <br />Site map</div>
               <button className="follow">Follow Us</button>
               <div className="wow">
               <div className="enclosed"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="enclosed"><i class="fa-brands fa-instagram"></i></div>
               <div className="enclosed"><i class="fa-brands fa-linkedin-in"></i></div>
               <div className="enclosed"><i class="fa-brands fa-twitter"></i></div>
               </div>
               </div>
            </div>
            <div className="flag-part">
              <div className="flags">
                <center>
                <img src={usa} alt="" width={160} height={160} />
                <h2>USA:</h2>
                <p>1st Avenue, SW, Hickory,NC, USA</p>
                 <p>Email: info@thedigitalimpacts.com</p>
                 </center>
              </div>
              <div className="flags">
                <center>
                <img src={uk} alt="" width={160} height={160} />
                <h2>UK:</h2>
                <p className="off">Oldham Greater Manchester, United Kingdom</p>
                 <p>Email: info@thedigitalimpacts.com</p>
                </center>
              </div>
              <div className="flags">
                <center>
                <img src={canada} alt="" width={160} height={160} />
                <h2>CANADA:</h2>
                <p className="off">92 Avenue, Surrey, BC, Canada</p>
                 <p>Email: info@thedigitalimpacts.com</p>
                 </center>
              </div>
             </div> 
                  <div className="beautiful"></div>
                  <center>
                  <p className="finale">Copyright © 2022 The Digital Impacts. All rights reserved</p>
                  </center>
                  </div>
        </section>
        </>
    )
}
export default Footer