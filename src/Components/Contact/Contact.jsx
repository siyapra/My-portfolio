import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section id='contact' className='container'>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="">
                <div className='formGroup'>
                    <label  htmlFor="name" hidden>
                        <h3 className='text-content'>Name</h3>
                    </label>
                    <input type="text" name='name' id='name' placeholder='Name' required />
                </div>
                <div className='formGroup'>
                    <label className='text-content' htmlFor="email" hidden>
                        E-mail
                    </label>
                    <input type="email" name='email' id='email' placeholder='email' required />
                </div>
                <div className='formGroup'>
                    <label className='text-content' htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea type="message" name='message' id='message' placeholder='Message' required ></textarea>
                </div>
                <input type="submit" className='hover btn' />
            </form>
        </section>
    )
}

export default Contact