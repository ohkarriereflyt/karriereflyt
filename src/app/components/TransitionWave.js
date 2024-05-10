import path from 'path';
import React from 'react';

const TransitionWave = ({ reverse = false }) => {
    return (
        <>
            <svg className='md:hidden block' width="100%" viewBox="0 0 393 97" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-2px', rotate: reverse ? '180deg' : '' }}>
                <g clipPath="url(#clip0_1347_13674)">
                    <g filter="url(#filter0_d_1347_13674)">
                        <path d="M487.603 25.3819H487.551C487.551 25.3819 429.177 54.2459 328.85 54.2459C228.523 54.2459 179.927 7.60938 72.1539 7.60938C-35.6194 7.60938 -143 38.9616 -143 38.9616V89.3894H487.603V25.3819Z" fill="#6B858D" fillOpacity="0.2" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_1347_13674)">
                        <path d="M487.603 38.7472C487.603 38.7472 428.002 67.7483 327.675 67.7483C227.347 67.7483 167.292 15.5664 59.5184 15.5664C-48.2549 15.5664 -143 55.9912 -143 55.9912V92.3102H487.603V38.7472Z" fill="#6B858D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter2_d_1347_13674)">
                        <path d="M487.603 62.9866C487.603 62.9866 428.394 80.6222 328.066 80.6222C227.739 80.6222 150.116 33.4844 42.3432 33.4844C-65.4301 33.4844 -143 67.2789 -143 67.2789V97.3463H487.603V62.9866Z" fill="#6B858D" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_1347_13674" x="-151.798" y="-1.18819" width="648.198" height="99.3764" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.39878" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1347_13674" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1347_13674" result="shape" />
                    </filter>
                    <filter id="filter1_d_1347_13674" x="-147" y="11.5664" width="638.603" height="84.7422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1347_13674" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1347_13674" result="shape" />
                    </filter>
                    <filter id="filter2_d_1347_13674" x="-151.798" y="24.6868" width="648.198" height="81.4584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.39878" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1347_13674" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1347_13674" result="shape" />
                    </filter>
                    <clipPath id="clip0_1347_13674">
                        <rect width="393" height="97" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg className='md:block hidden' width="100%" viewBox="0 0 1921 274" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-2px', rotate: reverse ? '180deg' : '' }}>
                <g clipPath="url(#clip0_1322_13026)">
                    <g opacity="0.2" filter="url(#filter0_d_1322_13026)">
                        <path d="M0 78.7302H0C0 78.7302 177.908 166.659 483.534 166.659C789.16 166.659 937.198 24.5898 1265.51 24.5898C1593.82 24.5898 1920.93 120.098 1920.93 120.098V273.716H0V78.7302Z" fill="#6B858D" />
                    </g>
                    <g opacity="0.5" filter="url(#filter1_d_1322_13026)">
                        <path d="M0 110.549C0 110.549 181.489 198.895 487.116 198.895C792.742 198.895 975.69 39.9336 1304 39.9336C1632.31 39.9336 1920.93 163.08 1920.93 163.08V273.718H0V110.549Z" fill="#6B858D" />
                    </g>
                    <g filter="url(#filter2_d_1322_13026)">
                        <path d="M0 169.048C0 169.048 180.295 222.772 485.922 222.772C791.548 222.772 1028.01 79.1758 1356.32 79.1758C1684.63 79.1758 1920.93 182.124 1920.93 182.124V273.718H0V169.048Z" fill="#6B858D" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_1322_13026" x="-26.8728" y="-2.21016" width="1974.6" height="302.725" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="13.4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1322_13026" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1322_13026" result="shape" />
                    </filter>
                    <filter id="filter1_d_1322_13026" x="-26.8728" y="13.1336" width="1974.6" height="287.385" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="13.4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1322_13026" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1322_13026" result="shape" />
                    </filter>
                    <filter id="filter2_d_1322_13026" x="-26.8728" y="52.3758" width="1974.6" height="248.143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="13.4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1322_13026" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1322_13026" result="shape" />
                    </filter>
                    <clipPath id="clip0_1322_13026">
                        <rect width="1921" height="274" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>

    );
};

export default TransitionWave;