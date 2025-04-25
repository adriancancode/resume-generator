import '../styles/section.css';

export default function Section({ title, descriptions, isInitial }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className='description-section'>
        {descriptions.map((description, index) => (
          <p 
            key={index} 
            className={isInitial ? "placeholder" : ""}
          >
            {description}
          </p>
        ))}
      </div>
      
    </div>
  );
}