import React from 'react'
import "../css/Inicio.css"

const Inicio = () => {
    return (
        <div className='contenido-principal' id="inicio">
            <div className="contenido">
            
                <div className='container'>
                    <div className="titulo">
                        <h1>Estilo y elegancia en nuestras colecciones</h1>
                    </div>
                </div>
                <div className='imagen-novia'>
                    <img src="vestido2.png" alt="" />
                </div>
            </div>

            <div className="contenido-2" id="nosotros">
                <div className="contenido-texto" >
                    <h2>
                       NOSOTROS
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur esse quo velit quas ab dolorum eum voluptatibus
                        aliquid veritatis, fugiat distinctio dicta, minima recusandae
                        autem repellendus, unde ratione repellat excepturi perferendis odio.
                        Id provident cum impedit modi eaque dignissimos nostrum veniam
                        numquam!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur esse quo velit quas ab dolorum eum voluptatibus
                        aliquid veritatis, fugiat distinctio dicta, minima recusandae
                        autem repellendus, unde ratione repellat excepturi perferendis odio.
                        Id provident cum impedit modi eaque dignissimos nostrum veniam
                        numquam!
                    </p>
                </div>

            </div>

            <div className="contenido-3" id="colecciones" >
                <div className="titulo-3" >
                    <h4>COLECCIONES EXCLUSIVAS</h4>
                </div>

                <div className="container-grid-cards">
                    <div className="card">
                        <img className="img-card" src="nv1.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                    <div className="card">
                        <img className="img-card" src="nv2.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                    <div className="card card1">
                        <img className="img-card" src="nv3.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                    <div className="card">
                        <img className="img-card" src="nv4.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                </div>
            </div>

            <div className="contenido-4" id="productos">
                <div className="titulo-h5"  >
                    <h5>PRODUCTOS</h5>
                </div>

                <div className="container-grid-cards">
                    <div className="card card3">
                        <img src="cor.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                    <div className="card card3">
                        <img src="cor2.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                    <div className="card card3">
                        <img src="cor.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                   
                    <div className="card card3">
                        <img  src="cor2.jpg" alt="" />
                        <p>lorem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio