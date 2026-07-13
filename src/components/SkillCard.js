import React from 'react';

function SkillsCard({
    title,
    items,
    borderColor = 'var(--foam)',
    fontSize = '1rem',
}) {
    return (
        <div className="skills-card" style={{ borderLeftColor: borderColor }}>
            <div className="skills-title">{title}</div>
            <div className="skills-list" style={{ fontSize: fontSize }}>
                {items.map((item, index) => (
                    <div className="skill-item" key={index}>
                        <span className="skill-label">{item.label}</span>
                        <span className="skill-desc">{item.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCard;