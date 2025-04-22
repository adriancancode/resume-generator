import '../styles/section.css';

export default function Section({title, descriptions}) {
  return (
    <>
        <h2>{title}</h2>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
    </>
  )
}