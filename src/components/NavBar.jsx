import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../images/Summer.png'

function NavBar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg bg-light">
             <div>
               <a href='#/'>
                 <img src={Logo} width='120' alt='logo'/>
               </a>
             </div>
             <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/">Lentes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/">Contactos</a>
                </li>                  
             </ul>
             <div className='carrito mx-5'><CartWidget items={8}/></div>
            </nav> 
        </div>
        
    )
}

export default NavBar
