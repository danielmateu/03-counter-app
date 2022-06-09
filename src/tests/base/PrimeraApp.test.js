import PrimeraApp from "../../PrimeraApp";
import React from 'react';
import { render, screen, shallow } from '@testing-library/react';

describe('Pruebas en PrimeraApp', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        const saludo = 'Hola, Soy Goku';

        render(<PrimeraApp saludo={saludo}/>);
        
        expect(screen.getByText(saludo)).toBeInTheDocument();
    });

    test('Debe demostrar el subtitulo mostrado por Props', ()=>{
        const subtitulo = 'Soy un subtitulo';

        render(<PrimeraApp subtitulo={subtitulo}/>);
        
        expect(screen.getByText(subtitulo)).toBeInTheDocument();

        
    })
});