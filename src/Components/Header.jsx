import React, {useState} from 'react'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

export default function Header() {
  
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <header>
      <nav className={toggle? 'nav-bar expanded' : 'nav-bar'}>
        <img src="https://raw.githubusercontent.com/conexoes-perifericas-2023/portal-conexoes/main/img/conexoes-pink-logo.png" alt="Logo do Programa Conexões Periféricas" className="logo" />
        <ul className="ul-menu">
            <li>
              <a href="./pages/home.jsx">Início</a>
            </li>
            <li>
              <a href="./pages/login">Aluno</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
        </ul>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle? <Icon icon={x} size={40} /> : <Icon icon={menu} size={40} />}
        </div>
      </nav>
    </header>
  )
}