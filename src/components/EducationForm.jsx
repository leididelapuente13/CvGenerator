const EducationForm = () => {
  return (
    <div>
      <form action="">
        <h3>Education</h3>
        <label htmlFor="school">School</label>
        <input type="text" id="school" placeholder="Enter school name" />

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" placeholder="Enter degree title" />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" placeholder="Select start date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" placeholder="Select end date" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter location" />
        <div className="buttons-wrapper">
          <input type="submit" value="Save" className="btn-submit" />
          <button type="button" className="btn-cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export const EducationCard = () => {
  return <div>EducationForm</div>;
};

export default EducationForm;