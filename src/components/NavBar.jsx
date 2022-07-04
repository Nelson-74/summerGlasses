import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../images/Summer.png'
import {Link} from 'react-router-dom'

const NavBar = () => {


  return (
      
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
                  <Link to="/category/sol"className="nav-link" >Lentes de sol</Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/lectura"className="nav-link" >Lentes de lectura</Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/sport"className="nav-link" >Lentes Sport</Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/contactología" className="nav-link" >Lentes de contacto</Link>
                </li> 
                <li className="nav-item">
                  <Link to="/category/limpieza" className="nav-link" >Liquido para limpieza</Link>
                </li>                    
             </ul>
             <Link to={`/producto`} className='carrito mx-5'><CartWidget items={8}/></Link>
              <div>
                  
              </div>
        </nav> 
        
    )
    
}

export default NavBar
