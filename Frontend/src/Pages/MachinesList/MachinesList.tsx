import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import '../../App.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Homepage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }

  return (
    <body className='MachinesList'>
        <Navbar/>
        
        <Footer/>
    </body>
  );
}
