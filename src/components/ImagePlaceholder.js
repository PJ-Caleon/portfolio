import React from 'react';

function ImagePlaceholder({
    src,
    alt = "Image",
    width = "100%",
    height = "auto",
    borderColor = "var(--love)",
    borderRadius = "8px",
    objectFit = "cover",
    padding = "8px",
    position = "center",  
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
            className="image-placeholder"
            style={{
                width: width,
                height: height,
                border: `3px solid ${borderColor}`,
                borderRadius: borderRadius,
                padding: padding,
                backgroundColor: "var(--highlight-low)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: getMarginAlignment(),  
            }}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: objectFit,
                        borderRadius: `calc(${borderRadius} - 4px)`,
                    }}
                />
            ) : (
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    Image Placeholder
                </span>
            )}
        </div>
    );
}

export default ImagePlaceholder;