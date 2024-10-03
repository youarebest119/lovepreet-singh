import React from 'react'
import Button from '../button/button'
import { MessageIcon } from '@/assets/icons/icons'

const Contact = () => {
    return (
        <div className="contact">
            <h4 className="custom_badge">Contact</h4>
            <h2>Get In Touch</h2>
            <p>Feel free to drop me a direct message with any questions, and I&apos;ll get back to you when I can. Please note that I might not respond to every message.</p>
            <Button>Message <MessageIcon /></Button>
        </div>
    )
}

export default Contact
