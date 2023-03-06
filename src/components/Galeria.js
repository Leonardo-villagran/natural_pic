//Importación de Context para el uso global de estados.
import React, { useContext } from 'react';
import Context from "../Context/Context"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/galeria.css";

//Importación de imágenes utilizadas para la generación de botón like.
import blanco from "../assets/img/corazon_blanco.png";
import rojo from "../assets/img/corazon_rojo.png";
//import Heart from "./Heart";

export default function Home() {

  //Desestructuración global de datos.
  const { nuevaMatriz, setNuevaMatriz } = useContext(Context);

  //Función que permite aumentar en uno la cantidad de likes cada vez que la imagen o el like es presionado.
  const presionarboton = (id, cant) => {
    const nuevosDatos = nuevaMatriz.map((dato) =>
      dato.id === id ? { ...dato, cantidad: cant+ 1 } : dato
    );
    setNuevaMatriz(nuevosDatos);
    console.log('Botón Presionado con id: ', id,'cantidad: ', (1+cant));
    console.log(nuevaMatriz)
  }

  //Impresión de galería de imágenes a través de matriz de datos con sus respectivos datos asociados.
  const imprimir = () => {
    const arreglo=
      nuevaMatriz.map((producto) => (
        <Col sm="auto" key={producto.id}>
          <div className='caja'>
            <img className='imagen' onClick={() => presionarboton(producto.id, producto.cantidad)} src={producto.tiny} alt="foto" />
            <div className='heart px-2'><img onClick={() => presionarboton(producto.id, producto.cantidad)} 
            src={producto.cantidad === 0 ? blanco: rojo} alt="foto"/>{ producto.cantidad}</div>
            <div className='texto_blanco px-2'>{producto.alt}</div>
          </div>
        </Col>
      ));
    return arreglo;
  }



  return (
    <div>
      <Container fluid>
        <Row className="justify-content-sm-center" >
          {imprimir()}
        </Row>
      </Container>
    </div>

  );
}
