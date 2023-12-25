import { useState } from "react";
import { useCVContext } from "../../context/CVContext";

const PersonalInfoForm = () => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const { setPersonalInfo, personalInfo } = useCVContext();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo(info);
    setInfo({ fullName: "", email: "", phoneNumber: "", address: "" });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    setInfo({
      fullName: personalInfo.fullName,
      email: personalInfo.email,
      phoneNumber: personalInfo.phoneNumber,
      address: personalInfo.address,
    });
    setPersonalInfo({
      ...personalInfo,
      fullName: info.fullName,
      email: info.email,
      phoneNumber: info.phoneNumber,
      address: info.address,
    }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Personal Details</h3>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          onChange={handleInputChange}
          value={info.fullName}
          name="fullName"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          name="email"
          value={info.email}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={info.phoneNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          name="address"
          value={info.address}
          onChange={handleInputChange}
        />

        <div className="buttons-wrapper">
          <input type="submit" value="Save" className="btn-submit" />
          <button type="button" className="btn-edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
