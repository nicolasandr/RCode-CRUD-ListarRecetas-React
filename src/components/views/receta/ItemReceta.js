import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemReceta = (props) => {
    //variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_RECETAS;
    const handleDelete = async () => {
        try {
            const parametrosPeticion = {
                method: 'DELETE',
            };
            const respuesta = await fetch(
                URL + '/' + props.receta._id,
                parametrosPeticion
            );
            if (respuesta.status === 200) {
                console.log('Producto Eliminado');
            }
            props.consultarAPI();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <tr className="bg-transparent">
            <td>{props.receta._id}</td>
            <td>{props.receta.titulo}</td>
            <td>{props.receta.imagen}</td>
            <td>{props.receta.descripcion}</td>
            <td>{props.receta.ingredientes.toString()}</td>
            <td>
                <Link
                    to={`/administrar/editar/${props.receta._id}`}
                    className="btn btn-secondary my-2"
                >
                    Editar
                </Link>
                <Button variant="danger" onClick={handleDelete}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemReceta;
