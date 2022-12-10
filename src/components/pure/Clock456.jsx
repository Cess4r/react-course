import React, { useState, useEffect} from 'react';

const Clock456 = () => {
    
    const inicialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin', 
        apellidos:'San Jose' 
    }

    const [clock, setClock] = useState(inicialState);
    
    useEffect(() => {
        const timerID = setInterval( ()=> tick(), 1000 );
    
        return () => {
            clearInterval(timerID);
        }
    })
    
    function tick() {
        setClock(
            {
                ...inicialState, 
                fecha: new Date(),
                edad: clock.edad + 1
            }
        )
    }

    return (
        <div>
            <h2>
                Hora Actual: {clock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clock.nombre} {clock.apellidos}</h3>
            <h1>Edad: {clock.edad}</h1> 
        </div>
    );
};


export default Clock456;
