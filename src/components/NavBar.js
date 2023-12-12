import React from 'react'
import './NavBar.css';

import Logo from './Logo';

export default function NavBar() {
  return (
    
    
     
                 
    <nav className="navigation">
        <Logo />
            <a href="#">Accueil</a>
            <a href="#">Actualités</a>
            <a href="#">Calendrier</a>
            <a href="#">Équipe</a>
            <a href="#">Contact</a>
       <button className="btnLogin-popup">Login</button>
    </nav>
    
        
   
  );
}
