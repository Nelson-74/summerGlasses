import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../images/Summer.png'
import {Link} from 'react-router-dom'
import category from '../../public/products.json'

function NavBar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg bg-light">
             <div>
               <Link to='/'>
                 <img src={Logo} width='120' alt='logo'/>
               </Link>
             </div>
             <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/lentes de sol"}>Lentes de sol</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/Lentes de lectura"}>Lentes de lectura</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/Lentes sport"}>Lentes Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/Lentes de contacto"}>Lentes de contacto</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/Limpieza de lentes"}>Liquido para limpieza</Link>
                </li>                    
             </ul>
             <div className='carrito mx-5'><CartWidget items={8}/></div>
            </nav> 
        </div>
        
    )
}

export default NavBar
