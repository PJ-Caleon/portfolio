import Card from "../components/Card";
import TextPlaceholder from "../components/TextPlaceholder";

function Experience() {
    return (
        <div className="page" id="experience">
            <h2>Embedded Software Intern</h2>

            <TextPlaceholder
                width="60%"
                position="left"
                textAlign="left"
                fontSize="1.5rem"
            >
                <h4>Dyson Electronics PTE Ltd - Philippine Branch</h4>
                <p>May 2025 - August 2025 | First Philippine Industrial Park II, Santo Tomas, Batangas</p>
                <p>I joined Dyson's Embedded Software (ESW) team as an intern, working on real-time embedded systems for Dyson's consumer products. The internship was project-based and team-driven, I wasn't just observing; I was writing code, debugging hardware, and delivering features alongside other interns under the guidance of senior engineers.</p>
            </TextPlaceholder>


            <Card
                contributions={[
                    { label: "Embedded Development", desc: "Worked with ARM-based NXP boards, writing C code for peripheral integration (LCD, I2C, GPIO, stepper motors)." },
                    { label: "Hardware Integration", desc: "Implemented LCD status display by adapting an Arduino I2C library to work with the NXP board, a solution I developed independently with no existing documentation." },
                    { label: "Test & Automation", desc: "Created unit testing frameworks, integrated test cases into CI/CD pipelines, and debugged build scripts for embedded projects." },
                    { label: "Product Development Immersion", desc: "Contributed to a cross-functional capstone project simulating real product development, from requirements gathering to stakeholder presentation." },
                    { label: "Documentation", desc: "Authored comprehensive technical documentation for NXP board setup, pin configuration, and codebase to support future interns." }
                ]}
                borderColor="var(--love)"
                fontSize="1rem"
            />
        </div>
    );
}

export default Experience;