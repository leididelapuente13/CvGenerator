const ExperienceForm = () => {
  return (
    <div>
      <form action="">
        <h3>Experience</h3>

        <label htmlFor="CompanyName">Company Name</label>
        <input type="text" id="CompanyName" placeholder="Enter company name" />

        <label htmlFor="PositionTitle">Position Title</label>
        <input
          type="text"
          id="PositionTitle"
          placeholder="Enter position title"
        />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter location" />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter job description"
        ></textarea>

        <input type="submit" value="Save" className="btn-submit" />
      </form>
    </div>
  );
};
export default ExperienceForm;
