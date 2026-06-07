const Icon = ({ path, size = 24, color = "currentColor", className = "", style = {} }) => {
    const pixelSize = typeof size === 'number' ? `${size}px` : size;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={pixelSize}
            height={pixelSize}
            fill={color}
            className={className}
            style={style}
        >
            <path d={path} />
        </svg>
    );
};

export default Icon;