import { FaMale, FaFemale } from "react-icons/fa";

function Contact({ firstName, lastName, phone, gender }) {
  return (
    <div className="contact">
      <div className="contact-info">
        <div className="contact-icon">
          {gender === "male" ? <FaMale /> : <FaFemale />}
        </div>
        <div className="contact-name">
          {firstName} {lastName}
        </div>
        <div className="contact-phone">{phone}</div>
      </div>
    </div>
  );
}

export default Contact;
