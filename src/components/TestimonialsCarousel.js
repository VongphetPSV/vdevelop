import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import dong from "../images/dong.jpg";
import air from "../images/air.png";
import avatar3 from "../images/avatar-3.png";
import avatar4 from "../images/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
     <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
     >
        <>
           <img src={dong} alt="ນາງ ແກ້ວບົວພອນ-Whessoe" />
           <div className="myCarousel">
               <h3>ທ່ານ ນາງ ແກ້ວບົວພອນ<br/> Whessoe</h3>
              <p>ພວກເຮົາໃຊ້ບໍລິການ ໃຫ້ຄຳປຶກສາ, ຝຶກອົບຮົມ ແລະ ຊ່ວຍຕິດຕັ້ງ ໂປຣແກມບັນຊີ ຄິກບຸກອອນລາຍ.<br/>
                 ບໍລິການດີ ແລະ ຊັບພອດໄວ
              </p>
            </div>
        </>
        <>
           <img src={air} alt="ເທັບພະໄທ, ບໍລິສັດ LDC" />
           <div className="myCarousel">
               <h3>ທ່ານ ນາງ ເທັບພະໄທ<br/>ບ/ສ LDC</h3>
              <p>ພວກເຮົາໃຊ້ບໍລິການ ໃຫ້ຄຳປຶກສາ ການນຳໃຊ້ ໂປຣແກມບັນຊີ Quickbook Online Advanced, Transaction Pro<br />
                 ວີ ພັດທະນາ ຊ່ວຍສຸດກົກສຸດປາຍ ບໍລິການໄວ.
              </p>
            </div>
        </>
     </Carousel>
  )
}

export default TestimonialsCarousel