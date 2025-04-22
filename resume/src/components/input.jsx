import { useState } from "react";
import { useResume } from "./ResumeContext";
import "../styles/input.css";

export default function Input({ section }) {
  const [sections, updateSections] = useResume();

  const sectionData = sections.find((sec) => sec.title === section);

  const [newDescription, setNewDescription] = useState('');
  function addDescription() {
    if (newDescription.trim()) {
      const updatedDescriptions = [...sectionData.descriptions, newDescription];
      updateSections(section, updatedDescriptions);
      setNewDescription(""); // Reset input field
    }
  }

  return (
    <div className="input">
      <h2>Edit {section}</h2>
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder={`Add new ${section} item`}
      />
      <button onClick={addDescription}>Add to {section}</button>
    </div>
  );
}