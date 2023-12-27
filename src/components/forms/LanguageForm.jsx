import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import { v4 as randomId } from "uuid";
import { IoIosTrash, IoMdCreate } from "react-icons/io";

export const LanguageForm = () => {
  const [language, setLanguage] = useState({});
  const { setLanguages, languages } = useCVContext();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLanguage((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    setLanguages([...languages, { ...language, id: randomId() }]);
    setLanguage({ ...language, name: "" });
  };

  const handleDeleteLanguage = (id)=>{
    console.log(id);
    const toRemove = languages.find((language)=>language.id === id);
    setLanguages(languages.filter((language)=>language != toRemove));
  }

  const setLanguageInForm = (id)=>{
    const toDisplay = languages.find((language)=>language.id === id);
    setLanguage({...language, name: toDisplay.name, fluency: toDisplay.fluency});
  }

  const handleEditLanguage = (id)=>{
    console.log(id);
  }

  return (
    <form onSubmit={handleAddLanguage}>
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
        <button type="button" className="btn-edit" onClick={()=>handleEditLanguage(language.id)}>
          Edit
        </button>
      </div>

      {languages.map((language)=>(
        <div key={language.id} className="div-config">
          <p>{language.name + " " + language.fluency}</p>
          <button type="button" onClick={()=>handleDeleteLanguage(language.id)}><IoIosTrash /></button>
          <button type="button" onClick={()=>setLanguageInForm(language.id)}><IoMdCreate /></button>
        </div>
      ))}
    </form>
  );
};
