type WaveSeparatorProps = {
    className?: string;
    variant?: 'up' | 'down';
};

const WaveSeparator = ({ className, variant = 'down' }: WaveSeparatorProps) => {
    const getPath = () => {
        switch (variant) {
            case 'up':
                return "M0 32L120 37.3C240 43 480 53 720 53.3C960 53 1200 43 1320 37.3L1440 32V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V32Z";
            case 'down':
            default:
                return "M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z";
        }
    };

    const svgClassName = variant === 'up' 
        ? "absolute top-0 w-full h-16 -mt-1" 
        : "absolute bottom-0 w-full h-16 -mb-1";

    return (
        <div className={`relative h-16 text-blue-900 mt-0 ${className}`}>
            <svg
                className={svgClassName}
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d={getPath()}
                />
            </svg>
        </div>
    );
};

export default WaveSeparator;