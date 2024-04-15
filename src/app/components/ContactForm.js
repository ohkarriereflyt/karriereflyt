'use client';
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='bg-3 md:p-6 p-4 kf-border-dark w-full'>
            <h2 className='text-center md:mb-6 mb-4'>Kontakt-skjema</h2>
            <form onSubmit={handleSubmit}>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="name" className="sr-only">Navn:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-3 px-4 w-full rounded-xl bg-background-flat"
                        placeholder="Navn"
                    />
                </div>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="email" className="sr-only">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 px-4 w-full rounded-xl bg-background-flat"
                        placeholder="Email"
                    />
                </div>
                <div className="md:mb-6 mb-5">
                    <label htmlFor="message" className="sr-only">Valgfri melding:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="py-3 px-4 w-full rounded-xl bg-background-flat min-h-[150px]"
                        placeholder="Valgfri melding"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="flex items-center overflow-x-hidden">
                        <label htmlFor="attachment" className="sr-only">Vedlegg:</label>
                        <input type="file" id="attachment" className="text-text-flat" />
                    </div>
                    <button type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;