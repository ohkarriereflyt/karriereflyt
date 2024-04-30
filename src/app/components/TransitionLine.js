import React from 'react';

const TransitionLine = ({ reverse = false }) => {
    return (
        <div className='relative h-[92px]' style={{ rotate: reverse ? '' : '180deg', overflow: 'hidden'}}>
            <div className='absolute h-[72px] w-full slate-gray-background opacity-30' style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.95)' }}></div>
            <div className='absolute h-12 w-full slate-gray-background opacity-70' style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.50)' }}></div>
            <div className='absolute h-6 w-full slate-gray-background' style={{ boxShadow: '0 0 16px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}></div>
        </div>
    );
};

export default TransitionLine;