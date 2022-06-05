import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";


const Contacts = () => {
   const [successMessage, setSuccessMessage] = useState("");
   const { register, handleSubmit, formState:{errors} } = useForm();

   const serviceID = "service_4xvwu5b";
   const tempalteID = "template_ID";
   const userID = "ioXz4-IC2XbFb8LlU";

   const onSubmit = (data, r) => {
      sendEmail(
         serviceID,
         tempalteID,
         {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
         },
         userID
      )
      r.target.reset();
   }

   const sendEmail = (serviceID, tempalteID, variables, userID) => {

      emailjs.send(serviceID, tempalteID, variables, userID)
         .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
         }).catch(err => console.error(`Something went wrong ${err}`));
   };
   
  return (
     <div id="contacts" className="contacts">
        <div className="text-center">
         <h1>ຕິດຕໍ່</h1>
         <p>ຊ່ວຍຕື່ມຂໍ້ມູນດ້ານລຸ່ມ ໂດຍຫຍໍ້ ແລະ ພວກເຮົາຈະຕິດຕໍ່ ກັບໄປເດີ</p>
           <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                     {/*NAME INPUT*/}
                     <div className="text-center">
                           <input 
                              type="text"
                              className="form-control"
                              placeholder="ຊື່"
                              name="name"
                              aria-invalid={errors.name ? "true" : "false"}
                              {...register("name",{
                                    required: "Please enter your name",
                                    maxLength: {
                                       value: 20,
                                       message: "Please enter a name with fewer than 20 characters"
                                    },
                                 })
                              }
                        />
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.name && errors.name.message}
                    </span>
                     {/*PHONE INPUT*/}
                     <div className="text-center">
                           <input 
                          type="text"
                          className="form-control"
                          placeholder="ເບີໂທ"
                          phone="phone"
                          aria-invalid={errors.name ? "true" : "false"}
                          {...register("phone", {
                             required: "Please add your phone number",
                          })}
                        />
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.phone && errors.phone.message}
                    </span>
                     {/*EMAIL INPUT*/}
                     <div className="text-center">
                           <input 
                              type="email"
                              className="form-control"
                              placeholder="ອີເມວ (ຖ້າມີ)"
                              email="email"
                              // aria-invalid={errors.name ? "true" : "false"}
                              // {...register("email",{
                              //    required: "Please enter your email",
                              //    pattern: {
                              //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              //       message: "Invalid Email"
                              //    }
                              // })}
                        />
                        <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.email && errors.email.message}
                    </span>
                     {/* SUBJECT INPUT */}
                     <div className="text-center">
                           <input
                          type="text"
                          className="form-control"
                          placeholder="ຫົວຂໍ້"
                          subject="subject"
                          aria-invalid={errors.name ? "true" : "false"}
                          {...register("subject", {
                             required: "OOPS, you forget to add the subject.",
                          })}
                        />
                        <div className="line"></div>
                        </div>
                 </div>
                 <span className="error-message">
                        {errors.subject && errors.subject.message}
                    </span>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                     {/* DESCRIPTION */}
                     <div className="text-center">
                           <textarea
                              type="text"
                              className="form-control"
                              placeholder="ຊ່ວຍຂຽນໂດຍຫຍໍ້ ກ່ຽວກັບ ສິ່ງທີ່ທານ ຕ້ອງການ"
                              description="description"
                              aria-invalid={errors.name ? "true" : "false"}
                              {...register("description", {
                                 required: "Please describe shortly your project..."
                              })}
                           ></textarea>
                           <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.description && errors.description.message}
                    </span>
                     <button className="btn-main-offer contact-btn" type="submit">
                        ສົ່ງເລີຍ
                     </button>
                  </div>
                  </div>
              </form>
        </div>
     </div>
  )
}

export default Contacts