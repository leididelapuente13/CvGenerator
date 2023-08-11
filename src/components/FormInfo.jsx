const FormInfo = () => {
  return (
    <div>
      <form>
        <h3>Personal Details</h3>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email address" />

        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Enter your address" />

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

export default FormInfo;
