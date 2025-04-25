import { useState, useContext, createContext } from "react";
import sectionsData from "../sections";

const initialSections = sectionsData.map((section) => ({
    ...section,
    isInitial: true
}));
const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [sections, setSections] = useState(initialSections);

    const updateSections = (sectionTitle, newDescriptions, isInitial = undefined) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.title === sectionTitle
                    ? { 
                        ...section, 
                        descriptions: newDescriptions,
                        isInitial: isInitial !== undefined ? isInitial : section.isInitial
                    }
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