import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
   faChalkboardTeacher,
   faFileCircleCheck,
   faMobileScreenButton,
   faDesktop,
   faChartPie,
   faPersonChalkboard,
   faFileCode
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
     <div id="services" className="services">
        <h1 className="py-5">ຜະລິດຕະພັນ ແລະ ບໍລິການ</h1>
         {/* <div className="container"> */}
            <div className="row">
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                    <div className="circle">
                       <FontAwesomeIcon className="icon" icon={faChalkboardTeacher} size="2x" />
                     </div>
                     <h3>ໃຫ້ຄຳປຶກສາພັດທະນາທຸລະກິດ</h3>
                     <p>ໃຫ້ປຶກສາ ພັດທະນາທຸລະກິດ ດ້ວຍ ແຜນທຸລະກິດ 1 ໜ້າເຈ້ຍ (One Page Plan) ແລະ ໂມເດວທຸລະກິດ (Business Model Canvas). </p>
                  </div>
               </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                     <div className="circle">
                        <FontAwesomeIcon className="icon" icon={faFileCircleCheck} size="2x" />
                     </div>
                     <h3>ປັບປຸງຂັ້ນຕອນທຸລະກິດ (Process Improvement-Automation)</h3>
                     <p>ປັບປຸງຂັ້ນຕອນທຸລະກິດ ໃຫ້ໄດ້ມາດຕະຖານ ແລະ ເປັນອັດຕະໂນມັດ ນຳໃຊ້ເທັກໂນໂລຍີຊ່ວຍ ເພື່ອໃຫ້ເພີ້ມປະສິດທິພາບ, ເປັນລະບົບ, ປ້ອງກັນຄວາມສ່ຽງ ແລະ ກວດສອບໄດ້.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faMobileScreenButton} size="2x" />
                  </div>
                  <h3>ແນະນຳ ແລະ ຝຶກອົບຮົມການນຳໃຊ້ເທັກໂນໂລຍີທີ່ເໝາະສົມ</h3>
                  <p>ແນະນຳເທັກໂນໂລຍີທີ່ເໝາະສົມ ເພື່ອໃຫ້ທຸລະກິດສາມາດ ເພີ້ມລາຍຮັບ, ການດຳເນີນງານມີປະສິດທິພາບ, ປ້ອງກັນຄວາມສ່ຽງ ແລະ ສາມາດຂະຫຍາຍໄດ້ ໃນລາຄາຖືກ.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                  </div>
                  <h3>ອອກແບບເວັບໄຊ ເພື່ອສ້າງ Brand Story, Sales Funnel</h3>
                  <p>ໃຫ້ຄຳປຶກສາ ການສ້າງ Brand Story, Sales Funnel ດ້ວຍການອອກແບບເວັບໄຊທີ່ສ້າງຄຸນຄ່າໃຫ້ແກ່ລູກຄ້າ</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faChartPie} size="2x" />
                  </div>
                  <h3>ໃຫ້ຄຳປຶກສາ ແລະ ອອກແບບລາຍງານ KPI, OKR</h3>
                 <p>ໃຫ້ຄຳປຶກສາຕົວຊີ້ວັດທຸລະກິດດ້ວຍ KPI, OKR(Measure what matters) ແລະ
                    ລາຍງານອັດຕະໂນມັດ ຊ່ວຍເພີ້ມປະສິດທິພາບໃຫ້ແກ່ຜູ້ບໍລິຫານ ແລະ
                    ປະຫຍັດເວລາທີ່ຕ້ອງເຮັດລາຍງານຂອງພະນັກງານ.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faPersonChalkboard} size="2x" />
                  </div>
                  <h3>ຝຶກອົບຮົມ ການນຳໃຊ້ ໂປຣແກມບັນຊີ Quickbook Online</h3>
                 <p>ຝຶກອົບຮົມ, ໃຫ້ຄຳປຶກສາ ການເຮັດບັນຊີບໍລິຫານ ແລະ ການນຳໃຊ້ ໂປຣແກມບັນຊີ Quickbook Online, Quickbook Advanced, Quickbook Desktop</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                  </div>
                  <h3>ພັດທະນາ Web Application</h3>
                 <p>ພັດທະນາ Responsive Web App ດ້ວຍ React, Next, Node, Mongo DB, Express, PHP, Laravel, Python, MySQL, HTML, CSS, JavaScript ແລະ Bootstrap.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                 <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faMobileScreenButton} size="2x" />
                  </div>
                  <h3>ພັດທະນາ Mobile App (iOS & Android)</h3>
                 <p>ພັດທະນາ Mobile App ທີ່ສາມາດໃຊ້ໄດ້ກັບ iOS ແລະ Android.</p>
                  </div>
               </div>
            </div>
        {/* </div> */}
     </div>
  )
}

export default Services