import React from 'react';

const Resultados = ({dato}) => {
    return (
        <div className="d-flex flex-column">
            <h1 className="text-center">Empleados</h1>
            <p>Nombre: {dato.nombre}</p>
            <p>Apellido: {dato.apellido}</p>
            <p>Nacionalidad: {dato.nacionalidad}</p>
            <p>Domicilio: {dato.domicilio}</p>
            <p>Puesto: {dato.puesto}</p>
            <p>Proyecto: {dato.proyecto}</p>
        </div>
    )
}

export default Resultados
