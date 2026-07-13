import SkillsCard from "../components/SkillCard";

function Skills() {
    const technicalSkills = [
        { label: "Languages", desc: "C, Python, JavaScript, C++" },
        { label: "Microcontrollers", desc: "Arduino, ESP Series, PIC16F877A, ATMEGA328" },
        { label: "Communication Protocols", desc: "UART, Bluetooth" },
        { label: "Linux", desc: "Debian, Ubuntu, Arch, Cachy OS, command-line, bash scripting" },
        { label: "Web Development", desc: "React, HTML, CSS" },
        { label: "Tools", desc: "Git, GitHub, BitBucket, Docker, CI/CD, Jira, MPLAB, MikroC, TinkerCAD, KiCAD, SimulIDE, OnShape" },
        { label: "Others", desc: "OpenCV, Soldering, System Architecture, Unit Testing" }
    ];

    const softSkills = [
        { label: "Communication", desc: "Effective verbal and written communication skills." },
        { label: "Teamwork", desc: "Collaborative and adaptable in team environments." },
        { label: "Problem Solving", desc: "Analytical approach to complex challenges." },
        { label: "Adaptability", desc: "Quick learner, comfortable with new technologies." },
        { label: "Time Management", desc: "Prioritize high-impact tasks before moving to lower-priority ones" },
        { label: "Openness to Constructive Feedback", desc: "Actively seek and apply feedback to improve work quality and team collaboration" }
    ];

    return (
        <div className="page" id="skills">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2>Technical Skill</h2>
                <SkillsCard
                    items={technicalSkills}
                    borderColor="var(--love)"
                    fontSize="1.1rem"
                />
                <h2>Soft Skill</h2>
                <SkillsCard
                    items={softSkills}
                    borderColor="var(--love)"
                    fontSize="1.1rem"
                />
            </div>
        </div>
    );
}

export default Skills;