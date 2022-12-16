import { useState } from 'react';
import './App.css';
import Contacto from './components/pure/Contacto';
import ContactForm from './components/pure/forms/contactForm';

const App =()=> {
  const defaultContact =[
    { nombre: 'Antonio', email:'77anto', conectado: true },
    { nombre: 'Carlos', email: '88Car', conectado: true }
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);
  
  function changeState(contacto){
    const index = nuevoContacto.indexOf(contacto);
    const temContact = [...nuevoContacto];
    
    temContact[index].estado = !temContact[index].estado;
    setNuevoContacto(temContact);
  }

  function remove(contacto){
    const index = nuevoContacto.indexOf(contacto);
    const temContact = [...nuevoContacto];
    temContact.splice(index, 1);
    setNuevoContacto(temContact);
  }

  function addContact(contacto){
    const temContact = [...nuevoContacto]
    temContact.push(contacto);
    setNuevoContacto(temContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>
      
      <div className='card-container'>
        {nuevoContacto.map((contacto, index)=> {
          return(
            <Contacto key={index} contacto={contacto} changeState={changeState} remove={remove} />
          );

        })}
      </div>
      <ContactForm onAddContact={addContact}></ContactForm>
  
    </div>
  );
}

export default App;
