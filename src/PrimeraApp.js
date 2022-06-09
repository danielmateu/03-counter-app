//Funcionant COmponents
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({
    saludo, 
    subtitulo,}) =>{

    // const saludo = {
    //     nombre : 'Dani',
    //     edad: 35,
    // };

return (
    <>
    <div className="primer-componente">
        {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
        <h1> {saludo} </h1>
        <h2>{subtitulo}</h2>
    </div>
    </>
    )

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: 'Soy un serdo por defecto 👾',
    subtitulo: 'Soy un título por defecto'
}

export default PrimeraApp;

