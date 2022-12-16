import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
    const name = useRef('');
    const email = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = {
            nombre: name.current.value,
            email: email.current.value,
            conectado: true 
        }

        onAddContact(newContact);
        name.current.value = '';
        email.current.value = '';
    }

    return (
        <div>
            <form onSubmit={addContact} className= 'contact-component'>
            <h2>Add Contact:</h2>
            <input ref={ name } name='mame'placeholder='Nombre Contacto' className='form-control mb-2'/>
            <input ref={ email } name='email' type= 'email' placeholder='Email' />
            <button onClick={ addContact } type='submit' className='subit-button'>
                Add Contact
            </button>

            </form>
        </div>
    );
}

export default ContactForm;
