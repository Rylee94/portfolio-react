import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError('');
        setEmailError('');

        if (name.trim() === '') {
            setNameError('Name is required');
        }
        if (message === '') {
            setMessageError('Message is required');
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
        }

        if (name.trim() !== '' && /\S+@\S+\.\S+/.test(email)) {
            // Your code to handle form submission goes here
            // You can send the form data to your server or perform any other actions
        }
    };

    const handleBlur = (e) => {
        if (e.target.name === 'name' && name.trim() === '') {
            setNameError('Name is required');
        }
        if (e.target.name === 'email' && !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
        }
        if (e.target.name === 'message' && message.trim() === '') {
            setMessageError('Message is required');
        } else if (e.target.name === 'message' && message.trim() !== '') {
            setMessageError('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <h2 className="title">Contact</h2>
                </div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleBlur}
                />
                {nameError && <p>{nameError}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
                />
                {emailError && <p>{emailError}</p>}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={handleBlur}
                ></textarea>
                {messageError && <p>{messageError}</p>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}