import React from 'react';

function TextPlaceholder({
    children,
    width = "100%",
    height = "auto",
    padding = "16px",
    position = "center",
    fontSize = "1rem",
    color = "var(--text)", 
    textAlign = "left", 
}) {
    const getMarginAlignment = () => {
        switch(position) {
            case 'left': return '0 auto 1.5rem 0';
            case 'right': return '0 0 1.5rem auto';
            case 'center':
            default: return '0 auto 1.5rem auto';
        }
    };

    return (
        <div
            className="text-placeholder"
            style={{
                width: width,
                height: height,
                padding: padding,
                margin: getMarginAlignment(),
                boxSizing: "border-box", 
                fontSize: fontSize,
            }}
        >
            <div
                style={{
                    fontFamily: "inherit", 
                    fontSize: fontSize,      
                    color: color,
                    textAlign: textAlign,
                    lineHeight: "1.6",
                }}
            >
                {children || (
                    <span style={{ fontFamily: "inherit", color: "var(--muted)", fontSize: "0.9rem" }}>
                        Text Placeholder
                    </span>
                )}
            </div>
        </div>
    );
}

export default TextPlaceholder;