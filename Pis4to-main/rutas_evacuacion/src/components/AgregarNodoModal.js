import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarNodoModal = ({ show, handleClose }) => {
    const [nombre, setNombre] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [capus, setCapus] = useState('');
    const [facultades, setFacultades] = useState('');
    const [tipoNodo, setTipoNodo] = useState('');

    const handleAddClick = () => {
        const nodo = { nombre, latitud, longitud, capus, facultades, tipoNodo };
        console.log(nodo);
        // Aquí puedes agregar el nodo a tu estado de la aplicación
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Nodo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre" onChange={e => setNombre(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formLatitud">
                        <Form.Label>Latitud:</Form.Label>
                        <Form.Control type="number" step="any" placeholder="Ingrese la latitud" onChange={e => setLatitud(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formLongitud">
                        <Form.Label>Longitud:</Form.Label>
                        <Form.Control type="number" step="any" placeholder="Ingrese la longitud" onChange={e => setLongitud(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formCapus">
                        <Form.Label>Capus:</Form.Label>
                        <Form.Control as="select" onChange={e => setCapus(e.target.value)}>
                            <option>Centro</option>
                            <option>Sur</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formFacultades">
                        <Form.Label>Facultades:</Form.Label>
                        <Form.Control as="select" onChange={e => setFacultades(e.target.value)}>
                            <option>Electricidad</option>
                            <option>Administrativo</option>
                            <option>Derecho</option>
                            <option>Medicina</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formTipoNodo">
                        <Form.Label>Tipo de nodo:</Form.Label>
                        <Form.Control as="select" onChange={e => setTipoNodo(e.target.value)}>
                            <option>Pasillo</option>
                            <option>Bloque</option>
                            <option>Area abierta</option>
                            <option>Zona Segura</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleAddClick}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgregarNodoModal;