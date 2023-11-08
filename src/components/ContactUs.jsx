import Button from './UI/Button';
import React, { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [contactMethod, setContactMethod] = useState('email');
    const [contactInfo, setContactInfo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the form submission based on the selected contact method
        if (contactMethod === 'email') {
            window.location.href = `mailto:${contactInfo}?subject=Contact from ${name}&body=${message}`;
        } else if (contactMethod === 'telegram') {
            window.open(`https://t.me/${contactInfo}?text=${message}`);
        } else if (contactMethod === 'whatsapp') {
            window.open(`https://wa.me/${contactInfo}?text=${message}`);
        } else if (contactMethod === 'viber') {
            window.open(`viber://pa?chatURI=${contactInfo}&text=${message}`);
        }
    };

    return (
        <div className="contact-us">
            <div className="container">
                <h2><span className="slesh">/</span>Контакти</h2>
                <div className="contact-options">
                    <div className="contact-method">
                        <span><img height={30} className='contact' src="./net/mail.png"/>Електронна пошта:</span>
                        <a href="mailto:your-email@example.com">your-email@example.com</a>
                    </div>
                    <div className="contact-method">
                        <span><img height={30} className='contact' src="./net/telegram.png"/>Telegram:</span>
                        <a href="https://t.me/your-telegram-nickname" target="_blank">your-telegram-nickname</a>
                    </div>
                    <div className="contact-method">
                        <span><img height={30} className='contact' src="./net/whatsapp.png"/>WhatsApp:</span>
                        <a href="https://wa.me/your-whatsapp-number" target="_blank">your-whatsapp-number</a>
                    </div>
                    <div className="contact-method">
                        <span><img height={30} className='contact' src="./net/viber.png"/>Viber:</span>
                        <a href="viber://chat?number=your-viber-number" target="_blank">your-viber-number</a>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className='contact-block1'>
                      <div className='group'>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <span className='bar'></span>
                        <label>Ваше ім'я</label>
                      </div>
                    </div>
                    <div className='contact-block2'>
                      <select
                          value={contactMethod}
                          onChange={(e) => setContactMethod(e.target.value)}
                          required
                      >
                          <option value="email">Електронна пошта</option>
                          <option value="telegram">Telegram</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="viber">Viber</option>
                      </select>
                      <div className='group'>
                        <input
                            type="text"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            required
                        />
                        <span className='bar'></span>
                        <label>Електронна пошта / Нік у Telegram</label>
                      </div>
                    </div>
                    <div className='contact-block3'>
                      <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Ваше повідомлення"
                      />
                      <span className='bar'></span>
                    </div>
                    <Button title={"Зв'язатися"}/>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
