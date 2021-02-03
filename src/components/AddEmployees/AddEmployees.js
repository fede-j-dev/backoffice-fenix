import React, { useState } from 'react';

const AddEmployees = ({crearDatos}) => {

    // state datos
    const [dato, setDato] = useState({
        nombre:"",
        apellido:"",
        nacionalidad:"",
        domicilio:"",
        puesto:"",
        proyecto:""
    });
    // destructuring state datos
    const {nombre, apellido, nacionalidad, domicilio, puesto, proyecto} = dato;

    // state error
    const [error, setError] = useState(false);
    const errorMje =    <div className="d-flex flex-column bg-danger text-light text-center rounded mb-2">
                            <strong>ERROR!</strong>
                            <p className="mb-1">Debes rellenar todos los campos</p>
                        </div>

    // functions
    const handleChange = e => {
        setDato({
            ...dato,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        // form validation
        if(nombre==="" || apellido==="" || nacionalidad==="" 
        || domicilio==="" || puesto==="" || proyecto==="") {
            setError(true)
            return;
        };
        // add data to principal state
        crearDatos(dato);
    }

    return (
        <div className="col-6">
           <h1 className="text-center">Agregar Empleado</h1>
            { error ? errorMje : null}
           <form 
            className="d-flex flex-column"
            onSubmit={handleSubmit}
            >
               <label>Nombre:</label>
               <input type="text" name="nombre" onChange={handleChange}/>

               <label>Apellido:</label>
               <input type="text" name="apellido" onChange={handleChange}/>

               <label>Fecha de nacimiento:</label>
               <input type="date" name="nacimiento" onChange={handleChange}/>

               <label>Nacionalidad:</label>
               <input type="text" name="nacionalidad" onChange={handleChange}/>

               <label>Domicilio:</label>
               <input type="text" name="domicilio" onChange={handleChange}/>

               <label>Puesto:</label>
               <input type="text" name="puesto" onChange={handleChange}/>

               <label>Proyecto:</label>
               <input type="text" name="proyecto" onChange={handleChange}/>

               <button
                type="submit"
                className="btn btn-success mt-3"
               >Enviar</button>
           </form>
        </div>
    )
}

export default AddEmployees
