import React from "react";
import logo from "../vdevelop-logo.png";
import { Link } from "react-scroll/modules";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
         <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }}/>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                     <Link smooth={true} to="home" offset={50} duration={250} delay={0} className="nav-link" aria-current="page" href="#">ໜ້າຫຼັກ</Link>
                  </li>
                  <li className="nav-item">
                     <Link smooth={true} to="about" offset={50} duration={250} delay={0} className="nav-link" href="#">ປະຫວັດ</Link>
                 </li>
                 <li className="nav-item">
                     <Link smooth={true} to="services" offset={50} duration={250} delay={0} className="nav-link" href="#">ບໍລິການ</Link>
                 </li>
                 <li className="nav-item">
                     <Link smooth={true} to="experience" offset={50} duration={250} delay={0} className="nav-link" href="#">ປະສົບການ</Link>
                 </li>
                 <li className="nav-item">
                     <Link smooth={true} to="portfolio" offset={50} duration={250} delay={0} className="nav-link" href="#">ລູກຄ້າ</Link>
                 </li>
                 <li className="nav-item">
                     <Link smooth={true} to="testimonials" offset={50} duration={250} delay={0} className="nav-link" href="#">ຄຳຕິຊົມ</Link>
                 </li>
                 <li className="nav-item">
                     <Link smooth={true} to="contacts" offset={50} duration={250} delay={0} className="nav-link" href="#">ຕິດຕໍ່</Link>
                 </li>
            </ul>
         </div>
      </div>
   </nav>
  )
}

export default Navbar;