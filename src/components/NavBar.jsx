import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../images/Summer.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import category from '../products.json'

const NavBar = () => {
const [categories, setCategories] = useState([]);

const getCategories = () =>{
  fetch ('../products.json')
  .then((res)=> res.json())
  .then((data)=>setCategories([...new setCategories(data.map((obj)=>obj.category))])
  );  
};

useEffect(()=>{getCategories();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[category]);

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
                  <Link className="nav-link" to={"/category/sol"}>Lentes de sol</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/lectura"}>Lentes de lectura</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/sport"}>Lentes Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/Contactología"}>Lentes de contacto</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to={"/category/limpieza"}>Liquido para limpieza</Link>
                </li>                    
             </ul>
             <div className='carrito mx-5'><CartWidget items={8}/></div>
              <div>
                  <div className="collapse navbar-collapse">
                      {categories?.map((link, i)=> {
                        return (
                          <Link to = {`/categories/${link}`} 
                          key={i}
                          className="nabvar-brand">
                          {link}</Link>)
                      })}
                  </div>
              </div>
        </nav> 
        
    )
    
}

export default NavBar
