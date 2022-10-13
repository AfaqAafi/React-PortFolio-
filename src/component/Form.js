import React from "react";
import "./FormStyles.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Your Email</label>
        <input type="email" />
        <label>Your Subject</label>
        <input type="text" />
        <label>Your Message</label>
        <textarea rows="6" palceholder="Type Your Message Here!" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
