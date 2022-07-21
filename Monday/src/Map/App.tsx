import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {
 const topCars2 = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <NewComponent topCars={topCars2}/> );
}


export default App;
