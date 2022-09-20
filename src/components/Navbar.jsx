import React, { useState } from 'react'
import "../css/Navbar.css"

const Navbar = () => {

    const [responsive, setResponsive] = useState(true);

    const handleResponsive = () => {
        setResponsive(!responsive)
    };
    return (
        <div>
            <div className='header'>
                <nav className={responsive? "navbar" : "enlaces-menu-activado"}>
                    <ul className='enlaces'>
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a href="#colecciones">Colecciones</a>
                        </li>

                        <li>
                            <a href="#productos">Productos</a>
                        </li>
                    </ul>
                </nav>
                <div className='iconos'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>
                <button className={responsive ? "ham" : "btn-ham"} type="button" onClick={handleResponsive}>
                    <i className="fa-solid fa-bars"></i>
                </button>

            </div>
        </div>
    )
}

export default Navbar