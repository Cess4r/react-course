import React from 'react'
import { CONTACT } from '../../models/contact.class';
import ContactComp from '../pure/contact';

const ContactList =()=> {
    const defaultContact = new CONTACT('Eduardo', 'Clys', 'eduard@gmail.com', false)
    return (
        <div>
            <div>
                Your Contacts:
            </div>
            <div>
                <ContactComp contk={defaultContact}></ContactComp>
            </div>
        </div>
    );
};

export default ContactList
