import { createContext, useContext, useState } from "react";

export const CVContext = createContext();

export const useCVContext = () =>{
    return useContext(CVContext)
}

export const CVProvider = ({children}) =>{
    const [personalInfo, setPersonalInfo] = useState({});
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    return(
        <CVContext.Provider value={{personalInfo, setPersonalInfo, educations, setEducations, experiences, setExperiences, skills, setSkills, languages, setLanguages}}>
            {children}
        </CVContext.Provider>
    )
}