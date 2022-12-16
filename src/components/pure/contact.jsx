import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT } from '../../models/contact.class';


const ContactComp = ({ contk}) => {
    return (
        <div>
            <h2>
                Nombre: { contk.nombre }
            </h2>
            <h3>
                apellido: { contk.apellido }
            </h3>
            <h4>
                Email: { contk.email }
            </h4>
            <h5>
                { contk.conectado ? 'Conectado':'Desconectado' }
            </h5>
        </div>
    );
};


ContactComp.propTypes = {
    contk: PropTypes.instanceOf(CONTACT).isRequired,
};

export default ContactComp;
