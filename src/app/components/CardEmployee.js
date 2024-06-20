'use client'
import localImg from '../images/øyvind-haugen.png'
import { useState } from 'react'
import ButtonArrow from './ButtonArrow'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

const CardEmployee = ({ index, employee, backgroundColor = 'slate-gray', foregroundColor = 'light', border = 'light' }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        // If the clicked employee is already open, close it, otherwise open the clicked employee
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="flex justify-center items-start">
            <div className={`flex-col w-full md:max-w-[258px] kf-border-${border} gap-2.5 ${backgroundColor + "-background"} ${foregroundColor}`}>
                <div className="flex flex-row md:flex-col w-full">
                    <div className="flex-shrink-0 md:h-[258px] md:w-full background-3 flex justify-center">
                        <Link className='w-full h-full flex items-end' href={`/contact/${encodeURIComponent(employee.name)}`}>
                            <div className='md:h-full md:w-full h-[35vw] w-[35vw] overflow-hidden'>
                                <img className='w-full h-full object-cover' src={employee.img ? employee.img : (employee.image ? employee.image : localImg)} alt={employee.name} />
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:p-3 md:pb-2 pl-3 pr-2 py-2 flex-col justify-between items-end flex">
                        <div className="self-stretch">
                            <h2>{employee.name}</h2>
                            <div className="w-full justify-between items-center inline-flex">
                                <p className="self-stretch mt-1 line-clamp-1">{employee.jobTitle}</p>
                                <button onClick={() => toggleOpen(index)} className='noStyle h-9' >
                                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openIndex === index ? 'scaleY(-1)' : 'scaleY(1)' }}>
                                        <path className={`${foregroundColor}-stroke`} d="M24 15.332L18 21.332L12 15.332" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className='md:hidden sm:flex flex-col hidden'>
                                {employee.emailText && (
                                    <div className="inline-flex self-stretch justify-start items-center gap-2.5  mt-3">
                                        <h3 className="w-16 ">E-post:</h3>
                                        <p>{employee.emailText}</p>
                                    </div>
                                )}
                                {employee.phoneNumber && (
                                    <div className="inline-flex py-1 self-stretch justify-start items-center gap-2.5 ">
                                        <h3 className="w-16 ">Telefon:</h3>
                                        <p>{employee.phoneNumber}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {openIndex === index && (
                            <>
                                <div className="self-stretch h-20 py-2 flex-col justify-start items-end md:flex hidden">
                                    {employee.emailText && (
                                        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                            <p className=" leading-loose">{employee.emailText}</p>
                                        </div>
                                    )}
                                    {employee.phoneNumber && (
                                        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                            <p className=" leading-loose">{employee.phoneNumber}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="hidden md:inline-flex self-stretch py-2 justify-start items-end gap-2.5">
                                    <p>{employee.bioShort}</p>
                                </div>
                                <div className='w-full justify-end hidden md:flex'>
                                    <ButtonArrow color={foregroundColor} href={`/contact/${encodeURIComponent(employee.name)}`} />
                                </div>
                            </>
                        )}
                        <SocialLinks color={foregroundColor} employee={employee} />
                    </div>
                </div>
                {openIndex === index &&
                    <div className='md:hidden px-3 pt-2'>
                        <div className='sm:hidden flex flex-col'>
                            {employee.emailText && (
                                <div className="inline-flex self-stretch justify-start items-center gap-2.5  mt-3">
                                    <h3 className="w-16 ">E-post:</h3>
                                    <p>{employee.emailText}</p>
                                </div>
                            )}
                            {employee.phoneNumber && (
                                <div className="inline-flex py-1 self-stretch justify-start items-center gap-2.5 ">
                                    <h3 className="w-16 ">Telefon:</h3>
                                    <p>{employee.phoneNumber}</p>
                                </div>
                            )}
                        </div>
                        <div className="inline-flex self-stretch py-2 justify-start items-end gap-2.5">
                            <p>{employee.bioShort}</p>
                        </div>
                        <div className='w-full flex justify-end'>
                            <ButtonArrow color={foregroundColor} href={`/contact/${encodeURIComponent(employee.name)}`} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CardEmployee;