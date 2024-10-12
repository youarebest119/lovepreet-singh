import React from 'react'
import Button from '../button/button'
import { MessageIcon } from '@/assets/icons/icons'

const Contact = () => {
    return (
        <section className="contact">
            <h4 data-animate className="custom_badge">Contact</h4>
            <h2 data-animate>Get In Touch</h2>
            <p data-animate>Feel free to drop me a direct message with any questions, and I&apos;ll get back to you when I can. Please note that I might not respond to every message.</p>
            <Button data-animate>Message <MessageIcon /></Button>
        </section>
    )
}

export default Contact
