import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-light">
             <div>
               <Link to='/'>
                 <img src='image/Logo.png' width='90' alt='logo'/>
               </Link>
             </div>
             <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <Link className="nav-link active" to='/'>Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Lentes'>Lentes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Contactos'>Contactos</Link>
                </li>
                
             </ul>
            </nav> 
        </div>
        
    )
}

export default NavBar
