import Section from "./section";
import sections from "../sections";
const Resume = () => {
    
    return (
        <div className="resume">
        {sections.map((section, index) => (
            <Section key={index} title={section.title} descriptions={section.descriptions} />
        ))}
        </div>
    );

}

export default Resume;