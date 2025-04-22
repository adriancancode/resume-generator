import Section from "./section";
import { useResume } from "./ResumeContext";

const Resume = () => {
    const { sections } = useResume();
    return (
        <div className="resume">
        {sections.map((section, index) => (
            <Section key={index} title={section.title} descriptions={section.descriptions} />
        ))}
        </div>
    );

}

export default Resume;