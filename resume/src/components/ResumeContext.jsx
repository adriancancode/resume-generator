import { useState, useContext, createContext } from "react";
import sectionsData from "../sections";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [sections, setSections] = useState(sectionsData);
    const updateSections = (sectionTitle, newDescriptions) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.title === sectionTitle
                    ? { ...section, descriptions: newDescriptions }
                    : section
            )
        );
    }
    return (
        <ResumeContext.Provider value={{ sections, updateSections }}>
            {children}
        </ResumeContext.Provider>
    )
}

export function useResume() {
    return useContext(ResumeContext);
}