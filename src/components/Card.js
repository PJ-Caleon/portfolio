import React from 'react';

function Card({
    contributions,
    borderColor = 'var(--love)',
    fontSize = '1rem',
}) {  
    return (
        <div className="experience-card" style={{ borderLeftColor: borderColor }}>
            {contributions && contributions.length > 0 && (
                <>
                    <div className="contributions-title">Key Contributions</div>
                    <div className="contributions" style={{ fontSize: fontSize }}>
                        {contributions.map((item, index) => (
                            <div className="contribution-item" key={index}>
                                <span className="contribution-label">{item.label}</span>
                                <span className="contribution-desc">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;