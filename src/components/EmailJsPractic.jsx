import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailJsPractic = () => {
  const form = useRef();
  const sendEmail = (e) => {
    alert("successfull");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlvjld9",
        "template_l7jjvqj",
        form.current,
        "qxtBsAqACVCOH2sxs"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className=" d_flex item_center justify_center w_100 pt_100">
        <form ref={form} onSubmit={sendEmail} className="d_flex flex_column">
          <div className=" d_flex item_center  gap_15">
            <label className=" d_flex text_black text_16">
              Name <span>-</span>
            </label>
            <input className=" w_100" type="text" name="user_name" />
          </div>
          <div className=" d_flex item_center  gap_15 mt_24">
            <label className=" d_flex text_nowrap text_black text_16">
              Last Name <span>-</span>
            </label>
            <input className=" w_100" type="text" name="user_lastname" />
          </div>
          <div className=" d_flex item_center gap_15 mt_24">
            <label className=" d_flex text_nowrap text_black text_16">
              Mobile<span>-</span>
            </label>
            <input className=" w_100" type="number" name="user_number" />
          </div>
          <div className=" d_flex item_center gap_15 mt_24">
            <label className=" d_flex">
              Email <span>-</span>
            </label>
            <input className="w_100" type="email" name="user_email" />
          </div>
          <div className=" d_flex item_center gap_15 mt_24">
            <label>
              {" "}
              Passward <span>-</span>
            </label>
            <input type="password" name="user_password" />
          </div>
          <div className=" d_flex item_center gap_15 mt_24">
            <label className=" d_flex">
              Message <span>-</span>
            </label>
            <textarea name="message" className="w_100" />
          </div>
          <div className="d_flex justify-center text_center item_center">
            <input
              className=" w_110 h_50 button mt_32"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailJsPractic;
