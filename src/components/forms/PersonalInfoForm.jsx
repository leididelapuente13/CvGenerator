import { useState } from "react";

const PersonalInfoForm = () => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div>
      <form>
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
          <button type="button" className="btn-edit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
