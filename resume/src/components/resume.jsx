import Section from "./section";
import { useResume } from "./ResumeContext";
import "../styles/resume.css";

const Resume = () => {
    const { sections } = useResume();
    return (
        <div className="resume">
          {sections.map((section, index) => (
              <Section 
                key={index} 
                title={section.title} 
                descriptions={section.descriptions} 
                isInitial={section.isInitial}
              />
          ))}
        </div>
    );
}

export default Resume;