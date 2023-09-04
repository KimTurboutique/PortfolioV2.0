import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm(
                'gmail',
                'template_nx12lwm',
                refForm.current,
                'N1dPZlIFyOND8OiZVEAqF',
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again.')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>Contact Me</h1>
                    <p>
                        Contact me using this form, if you have any questions or opportunities for new projects.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required></input>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required></input>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required>
                                    </input>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;