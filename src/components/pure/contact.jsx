import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT } from '../../models/contact.class';


const ContactComp = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.nombre }
            </h2>
            <h3>
                apellido: { contact.apellido }
            </h3>
            <h4>
                Email: { contact.level }
            </h4>
            <h5>
                Conectado: { contact.conectado ? 'Si':'No' }
            </h5>
        </div>
    );
};


ContactComp.propTypes = {
    contk: PropTypes.instanceOf(CONTACT)
};

export default ContactComp;
