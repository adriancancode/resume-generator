export default function Input({ section, setSection }) {
    
  return (
    <div className="input">
      <input
        type="text"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        placeholder="Enter section name"
      />
    </div>
  );
}