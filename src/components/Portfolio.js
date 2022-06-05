import React from "react";
import whessoe from "../images/whessoe.jpg";
import ldc from "../images/ldc.jpg";
import skycool from "../images/skycool.png";
import crservice from "../images/crservice.jpg";
import uzaap from "../images/uzaap.png";
import lji from "../images/lji.png";
import vientianeWaste from "../images/vientiane-waste.jpg";
import aml from "../images/aml.jpg";
import mhp from "../images/mhp.jpg";

const Portfolio = () => {      
  return (
     <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
           <h1 className="text-uppercase text-center py-5">ລູກຄ້າພວກເຮົາ</h1>
           <div className="image-box-wrapper row justify-content-between">
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={whessoe} alt="Netflix Clone Project..." />
                 <div className="overflow"></div>
               </div>
               {/* - */}
              <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={ldc} alt="Amazon Clone Project..." />
                 <div className="overflow"></div>
               </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={skycool} alt="udemy Clone Project..." />
                 <div className="overflow"></div>
               </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={crservice} alt="odoo Clone Project..." />
                 <div className="overflow"></div>
                  </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={uzaap} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
              </div>
              {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12" >
                  <img className="portfolio-image" src={lji} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
              </div>
              {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={vientianeWaste} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
              </div>
              {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={aml} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
              </div>
              {/* - */}
               <div className="portfolio-image-box col-lg-3 col-md-6 col-sm-12">
                  <img className="portfolio-image" src={mhp} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio