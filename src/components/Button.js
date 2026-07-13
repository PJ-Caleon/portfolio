import React from 'react';

function Button({
    children,
    onClick,
    href,
    download,
    type = "button",
    variant = "primary",
    size = "medium",
    disabled = false,
    className = "",
    style = {},
}) {
    const handleClick = (e) => {
        if (disabled) return;

        if (href) {
            if (download) {
                return;
            }
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    // Build class names
    const baseClass = `btn btn-${variant} btn-${size}${disabled ? ' btn-disabled' : ''} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                download={download}
                className={baseClass}
                style={style}
                onClick={handleClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={baseClass}
            style={style}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;