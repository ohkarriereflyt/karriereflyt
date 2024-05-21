import React from 'react';

const ContactInfo = ({address = 'bergen', phoneNumber = 'not available', email = 'not available'}) => {
    return (
        <div className="flex lg:flex-row flex-col justify-between light mb-8 gap-2">
            <div className="flex flex-col items-center gap-4">
                <svg className='md:h-16 h-10' viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M32.8241 64.0273C50.3214 64.0273 64.8083 49.5402 64.8083 32.0428C64.8083 14.577 50.2901 0.0585938 32.7928 0.0585938C15.3268 0.0585938 0.839844 14.577 0.839844 32.0428C0.839844 49.5402 15.3582 64.0273 32.8241 64.0273Z" fill="url(#paint0_linear_937_12789)" />
                    <path d="M25.4131 19.9314C25.4131 15.855 28.7683 12.5625 32.8133 12.5625C36.8899 12.5625 40.2138 15.855 40.2138 19.9314C40.2138 23.2866 38.0186 26.0461 35.0398 26.9241V43.1358C35.0398 47.9648 34.3184 52.1353 32.8133 52.1353C31.3395 52.1353 30.5557 47.8706 30.5557 43.1358V26.9241C27.6081 26.0147 25.4131 23.2553 25.4131 19.9314Z" fill="url(#paint1_linear_937_12789)" />
                    <defs>
                        <linearGradient id="paint0_linear_937_12789" x1="32.8241" y1="0.0585937" x2="32.8241" y2="64.0273" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_937_12789" x1="32.8134" y1="12.5625" x2="32.8134" y2="52.1353" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className='text-center line-clamp-1'>{address}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <svg className='md:h-16 h-10' viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M32.6644 63.9179C50.1618 63.9179 64.6486 49.4308 64.6486 31.9334C64.6486 14.4676 50.1305 -0.0507812 32.6331 -0.0507812C15.1672 -0.0507812 0.680176 14.4676 0.680176 31.9334C0.680176 49.4308 15.1985 63.9179 32.6644 63.9179Z" fill="url(#paint0_linear_937_12803)" />
                    <path d="M24.8339 39.5032C17.2768 31.9775 12.4791 22.3821 18.1548 16.6751C18.2802 16.5496 18.4056 16.4242 18.5938 16.2988C20.7574 14.6996 22.7643 14.3233 24.0813 16.2361L28.0637 21.849C29.4121 23.7618 29.1298 24.922 27.6246 26.4585L26.3704 27.8069C25.9627 28.2458 26.1195 28.8104 26.3076 29.1866C26.9661 30.2842 28.5339 32.2282 30.3213 34.0156C32.14 35.8344 34.0214 37.3395 35.1503 38.0293C35.5894 38.2801 36.2479 38.3429 36.5929 37.9665L37.8783 36.7123C39.3208 35.2698 40.575 34.9562 42.4879 36.2732C45.0907 38.1233 46.6898 39.2209 48.1949 40.3185C50.0763 41.7294 49.6687 43.9244 48.2262 45.5551C48.0381 45.7745 47.8813 45.9939 47.6619 46.2136C41.9862 51.8892 32.3595 47.0915 24.8339 39.5032Z" fill="url(#paint1_linear_937_12803)" />
                    <defs>
                        <linearGradient id="paint0_linear_937_12803" x1="32.6644" y1="-0.0507813" x2="32.6644" y2="63.9179" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_937_12803" x1="32.5632" y1="14.9453" x2="32.5632" y2="48.7019" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className='text-center line-clamp-1'>{phoneNumber}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <svg className='md:h-16 h-10' viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M32.5169 63.8905C50.0143 63.8905 64.5012 49.4034 64.5012 31.9061C64.5012 14.4402 49.983 -0.078125 32.4856 -0.078125C15.0197 -0.078125 0.532715 14.4402 0.532715 31.9061C0.532715 49.4034 15.0511 63.8905 32.5169 63.8905Z" fill="url(#paint0_linear_937_12811)" />
                    <path d="M26.2065 32.0084L15.1061 43.0775C14.8866 42.7012 14.7925 41.9485 14.7925 40.7883V23.103C14.7925 21.9741 14.8866 21.2215 15.0433 20.8766L26.2065 32.0084ZM32.5405 33.6391C32.0075 33.6391 31.4119 33.4823 30.7533 32.8864L16.6426 18.7443C17.0502 18.4307 17.9595 18.1172 19.3079 18.1172H45.7106C47.0589 18.1172 47.9997 18.4307 48.4073 18.7443L34.2966 32.8864C33.6694 33.4507 33.1051 33.6391 32.5405 33.6391ZM38.7495 32.0084L49.9124 20.8766C50.0692 21.2215 50.1947 21.9741 50.1947 23.103V40.7883C50.1947 41.9485 50.0692 42.7012 49.8498 43.0775L38.7495 32.0084ZM32.5092 36.2103C33.6694 36.2103 34.5474 35.834 35.8018 34.6738L36.8365 33.733L48.282 45.1785C47.9055 45.5234 47.0276 45.7741 45.6793 45.7741H19.3079C17.9909 45.7741 17.0816 45.5234 16.7053 45.1785L28.1819 33.733L29.2169 34.6738C30.4397 35.834 31.349 36.2103 32.5092 36.2103Z" fill="url(#paint1_linear_937_12811)" />
                    <defs>
                        <linearGradient id="paint0_linear_937_12811" x1="32.5169" y1="-0.078125" x2="32.5169" y2="63.8905" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_937_12811" x1="32.4936" y1="18.1172" x2="32.4936" y2="45.7741" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFFBF8" />
                            <stop offset="1" stopColor="#EDE4DE" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className='text-center line-clamp-1'>{email}</p>
            </div>
        </div>
    );
};

export default ContactInfo;