import Link from 'next/link';

const ButtonArrow = ({ text = 'Les mer', color = 'light', href, direction = 'right' }) => {
    const directions = {
        right: '0deg',
        left: '180deg',
        up: '-90deg',
        down: '90deg',
    }

    const ButtonContent = () => (
        <>
            <p className={`button-text ${color}`}>
                {text}
            </p>
            <svg className='button-arrow' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ rotate: directions[direction] }}>
                <ellipse className={`${color}-fill`} opacity="0.2" cx="18.0011" cy="18.0037" rx="18.0002" ry="18.0008" />
                <path className={`${color}-stroke`} d="M11.9996 18H23.9996" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                <path className={`${color}-stroke`} d="M18.0007 12.0039L24.0007 18.0039L18.0007 24.0039" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    );

    // Conditionally wrap the ButtonContent with a Link or div based on href
    const ButtonType = () => (
        <>
            {href ? (
                <Link href={href} className='flex items-center gap-2 hover:scale-105'>
                    <ButtonContent />
                </Link>
            ) : (
                <div className='flex items-center gap-2 hover:scale-105'>
                    <ButtonContent />
                </div>
            )}
        </>
    )

    return (
        <div className="h-14 py-2 justify-center items-center gap-4 inline-flex cursor-pointer">
            <ButtonType />
        </div>
    )
};

export default ButtonArrow;
