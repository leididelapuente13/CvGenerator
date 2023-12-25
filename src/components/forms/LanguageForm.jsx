import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import { v4 as randomId } from "uuid";

export const LanguageForm = () => {
  const [language, setLanguage] = useState({});
  const { setLanguages, languages } = useCVContext();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLanguage((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguages([...languages, { ...language, id: randomId() }]);
    setLanguage({ ...language, name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Language</h3>
      <label>Language</label>
      <input
        type="text"
        name="name"
        placeholder="English"
        onChange={handleOnChange}
        value={language.name}
      />
      <label>Fluency</label>
      <select name="fluency" onChange={handleOnChange}>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
      </select>
      <div className="buttons-wrapper">
        <input
          type="submit"
          value="Add"
          className="btn-submit"
          onChange={handleOnChange}
        />
        <button type="button" className="btnEdit">
          Edit
        </button>
      </div>

      {languages.map((language)=>(
        <div key={language.id}>
          <p>{language.name + language.fluency}</p>
          <button type="button">X</button>
          <button type="button">Edit</button>
        </div>
      ))}
    </form>
  );
};
