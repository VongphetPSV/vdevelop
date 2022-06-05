import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
     <div id="about" className="container py-5">
        <div className="row">
           <div className="col-lg-6 col-xm-12">
              <div className="d-flex justify-content-center">
                 <img className="profile-img" src={author} alt="author..." />
               </div>
           </div>
           <div className="col-lg-6 col-xm-12">
              <h1 className="about-heading">ປະຫວັດຂອງເຮົາ</h1>
              <p className="about-text">
                 ສະບາຍດີ! ຂ້ອຍຊື່ ວົງເພັດ ພົງສະຫວັດ (ພູສີ). ຂ້ອຍ ເປັນທີ່ປຶກສາ ພັດທະນາທຸລະກິດ SME.
                 ຂ້ອຍ ຊ່ວຍ ເຈົ້າຂອງທຸລະກິດ ໃຫ້ສາມາດ ຂະຫຍາຍ ແລະ ມີຫຼາຍທຸລະກິດໄດ້.<br />
                 <br/>
                  ດ້ວຍ 5 ຂັ້ນຕອນ ຄື: <br/>
                  1. ໃຫ້ຄຳປຶກສາພັດທະນາທຸລະກິດ (Plan, Business Model Canvas)<br/>
                  2. ປັບປຸງຂັ້ນຕອນທຸລະກິດ (Process Improvement-automation)<br/>
                  3. ແນະນຳເທັກໂນໂລຍີທີ່ເໝາະສົມ (Digital Transformation)<br/>
                  4. ສ້າງ Brand Story, Sales Funnel ດ້ວຍ ເວັບໄຊ <br/>
                  5. ບໍລິຫານງ່າຍຂື້ນດ້ວຍ ລາຍງານຕົວຊີ້ວັດທຸລະກິດ ອັດຕະໂນມັດ<br/> (KPI, OKR-Measure what matters)<br/><br/>
                 ຂ້ອຍມີປະສົບການເຮັດວຽກ 15 ປີ ກັບ ບໍລິສັດຕ່າງປະເທດ, ເອກະຊົນລາວ ແລະ NGO
                 ຢູ່ຫຼາຍຕຳ   ແໜ່ງງານ, ຫຼາຍພະແນກ ຕັ້ງແຕ່ເປັນວິຊາການ ຈົນເຖິງຜູ້ບໍລິຫານລະດັບສູງ.
                 ຂ້ອຍມີປະສົບການຜ່ານ ວົງຈອນຊ່ວງຊີວິດຂອງທຸລະກິດຄົບເຊັ່ນ: ການເລີ້ມຕົ້ນ, ການຂະຫຍາຍ, ທົດຖອຍ ແລະ ການປິດກິດຈະການ.<br /><br />
                 ຂ້ອຍຢາກເອົາປະສົບການ ແລະ ຄວາມຮູ້ທັງໝົດທີ່ມີ ມາຊ່ວຍເຈົ້າ ໃຫ້ສາມາດ ຂະຫຍາຍ ແລະ ມີຫຼາຍທຸລະກິດໄດ້.

              </p>
            </div>
        </div>
     </div>
  )
}

export default AboutMe