// ANTES

import React from 'react';
import  ReactDOM  from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css'
import { CounterApp } from './CounterApp';


const divRoot = document.getElementById('root');

// ReactDOM.render( <PrimeraApp saludo = 'Dani'/>, divRoot);
ReactDOM.render( <CounterApp counter = {0}/>, divRoot);

//React 18

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// // import PrimeraApp from './PrimeraApp';
// import './index.css'
// import { CounterApp } from './CounterApp';


// const divRoot = document.getElementById('root');
// const root = createRoot(divRoot);

// // root.render( <PrimeraApp saludo = 'Hola, Soy Dani' subtitulo = 'Soy un subtitulo 💀'/>);
// root.render( <CounterApp counter = {0}/>);