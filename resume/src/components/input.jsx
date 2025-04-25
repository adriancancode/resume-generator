import { useState } from "react";
import { useResume } from "./ResumeContext";
import "../styles/input.css";

export default function Input({ section }) {
  const { sections, updateSections } = useResume();

  const sectionData = sections.find((sec) => sec.title === section);
  const isInitialData = sectionData.isInitial !== false; // Check if data is initial placeholder

  const [newDescription, setNewDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  function addDescription() {
    if (newDescription.trim()) {
      let updatedDescriptions;
      
      // If it's the first entry and contains initial placeholder data, replace it
      if (isInitialData) {
        updatedDescriptions = [newDescription]; // Replace with just the new entry
        updateSections(section, updatedDescriptions, false); // Mark as non-initial data
      } else {
        // Otherwise add to existing descriptions
        updatedDescriptions = [...sectionData.descriptions, newDescription];
        updateSections(section, updatedDescriptions, false);
      }
      
      setNewDescription(""); // Reset input field
      setIsEditing(false); // Exit editing mode
    }
  }

  function startEditing() {
    setIsEditing(true);
  }

  return (
    <div className="input">
      <h2>Edit {section}</h2>
      {isEditing ? (
        <>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder={`Add your ${section}`}
            autoFocus
          />
          <div className="button-group">
            <button onClick={addDescription}>
              {isInitialData ? `Set ${section}` : `Add to ${section}`}
            </button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <button onClick={startEditing}>
          {isInitialData ? `Replace Default ${section}` : `Add to ${section}`}
        </button>
      )}
    </div>
  );
}