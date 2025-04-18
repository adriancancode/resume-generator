import { useState } from "react";
import "/styles/input.css";
import sections from "../sections";
export default function Input({ section }) {
  const [input, setInput] = useState(sectionsdescriptions);

  function editSection() {
    
  }

  return (
    <div className="input">
      <h2>{section}</h2>
      <input
        type="text"
        value={section}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter section name"
      />
      <button onClick={editSection}>Edit {section} </button>
    </div>
  );
}