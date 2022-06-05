import React from "react";
import { Link } from "react-scroll/modules";
import { 
   FacebookShareButton,
   FacebookIcon,
   LinkedinShareButton,
   LinkedinIcon

} from "react-share";

const Footer = () => {
  return (
     <div className="footer">
        <div className="container">
           <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                 <div className="d-flex">
                     <p>ບ້ານ ດົງໝ້ຽງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ</p>
                 </div>
                 <div className="d-flex">
                     <a href="tel: 020 56470111">+856 20 56470111</a>
                 </div>
                 <div className="d-flex">
                     <p>vongphet@vdevelop.la</p>
                 </div>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6">
                 <div className="row">
                    <div className="col">
                       <Link smooth={true} to="home" offset={50} duration={250} delay={0} className="footer-nav" aria-current="page" href="#">ໜ້າຫຼັກ</Link>
                       <br />
                       <Link smooth={true} to="about" offset={50} duration={250} delay={0} className="footer-nav" href="#">ປະຫວັດ</Link>
                       <br />
                       <Link smooth={true} to="services" offset={50} duration={250} delay={0} className="footer-nav" href="#">ບໍລິການ</Link>
                    </div>
                    <div className="col">
                       <Link smooth={true} to="experience" offset={50} duration={250} delay={0} className="footer-nav" href="#">ປະສົບການ</Link>
                       <br />
                       <Link smooth={true} to="portfolio" offset={50} duration={250} delay={0} className="footer-nav" href="#">ລູກຄ້າ</Link>
                       <br/>
                       <Link smooth={true} to="contacts" offset={50} duration={250} delay={0} className="footer-nav" href="#">ຕິດຕໍ່</Link>
                    </div>
                  </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                 <div className="d-flex justify-content-center">
                    <FacebookShareButton
                       url={"https://www.facebook.com/vdevelop.la"}
                    >
                       <FacebookIcon className="mx-3" size={36} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                       url={"https://www.linkedin.com/in/vongphet-phongsavath-92539ab4/"}
                    >
                       <LinkedinIcon className="mx-3" size={36} />
                    </LinkedinShareButton>
                 </div>
                 <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp; V Develop | All Right Reserved
                 </p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Footer