'use client';
import React, { useState, useRef } from 'react';
import Modal from './Modal';

const initValues = { name: "", email: "", subject: "", message: "", file: null }
const initState = { isLoading: false, error: "", values: initValues };

const ContactForm = () => {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const message = state.error ? state.error : 'Meldingen ble sendt!';
    const [success] = useState(!state.error && state.isLoading === false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const { values, isLoading, error } = state;

    const onBlur = ({ target }) => {
        setTouched((prev) => ({ ...prev, [target.name]: true }));
    }

    const handleChange = ({ target }) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }))
    };

    const closeModal = () => {
        setModalOpen(false); // Function to close the modal
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            const data = new FormData();
            data.append("name", values.name);
            data.append("email", values.email);
            data.append("subject", values.subject);
            data.append("message", values.message);
            if (file) {
                data.append("file", file);
            }
            const response = await fetch("/api/nodemailer", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                throw new Error(`Failed to send message with status: ${response.status}`);
            }

            // Wait for 2 seconds to see if isLoading is working
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setState(initState);
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // Clear the file input field
            }
            setModalOpen(true);
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
            console.error(error);
            setModalOpen(true);
        }
    };

    return (
        <div id='contact-form' className='bg-3 md:p-6 p-4 kf-border-dark w-full h-full'>
            <h2 className='text-center md:mb-6 mb-4'>Kontaktskjema</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="name" className="sr-only">Navn:</label>
                    <input
                        required
                        type="text"
                        id="name"
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                        className="py-3 px-4 w-full kf-border-dark bg-background-flat"
                        placeholder="Navn"
                    />
                </div>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="email" className="sr-only">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        className="py-3 px-4 w-full kf-border-dark bg-background-flat"
                        placeholder="Email"
                    />
                </div>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="subject" className="sr-only">Emne:</label>
                    <input
                        required
                        type="text"
                        id="subject"
                        name='subject'
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={onBlur}
                        className="py-3 px-4 w-full kf-border-dark bg-background-flat"
                        placeholder="Emne"
                    />
                </div>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="message" className="sr-only">Valgfri melding:</label>
                    <textarea
                        required
                        id="message"
                        name='message'
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                        className="py-3 px-4 w-full kf-border-dark bg-background-flat min-h-[150px]"
                        placeholder="Valgfri melding"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="flex items-center overflow-x-hidden">
                        <label htmlFor="attachment" className="sr-only">Vedlegg:</label>
                        <input
                            type="file"
                            id="attachment"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            className="text-text-flat"
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className={`${isLoading || !values.name || !values.email || !values.subject || !values.message ? 'opacity-60' : 'opacity-100'}`}>
                        {isLoading ? 'Sender...' : 'Send'}
                    </button>
                </div>
            </form>
            <Modal isOpen={isModalOpen} onClose={closeModal} className="relative" >
                {state.error ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                }
                <p className='p-4 light' >{state.error ? state.error : 'Meldingen ble sendt!'}</p>
                <button onClick={closeModal} className="button ">Lukk</button>
            </Modal>
        </div>
    );
};

export default ContactForm;