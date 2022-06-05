import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";
import { Link } from "react-scroll/modules";

const Header = () => {

  return (
     <div id="home" className="header-wraper">
        <div className="main-info">
           <h1>ທ່ານສາມາດຂະຫຍາຍ ແລະ ມີຫຼາຍທຸລະກິດໄດ້<br />ເປີດໃຈ ປຶກສາກັບ V Develop ລອງເບິ່ງ</h1>
           <span className="typewriter-pro">
               <Typewriter
                  words={["Business Development Consulting", "Process Improvement-Automation","Brand Story-Sales Funnel", "Digital Transformation", "Manatement Dashboard - KPI, OKR"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
               />
           </span>
           <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">ຕິດຕໍ່ ພວກເຮົາ</Link>
        </div>
    </div>
  )
}

export default Header