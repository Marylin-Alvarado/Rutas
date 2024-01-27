import { useEffect, useState } from "react";

const NodoLista = () => {
    const [empdata, empdatachange] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/places").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>NODO LISTA</h2>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Nombre</td>
                                <td>Latitud</td>
                                <td>Longitud</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                {item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.latitud}</td>
                                            <td>{item.longitud}</td>
                                            <td><button className="btn btn-success">Edit</button></td>
                                            <td><button className="btn btn-danger">Remove</button></td>
                                            <td><button className="btn btn-primary">Details</button></td>

                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>

                </div>

            </div>

        </div>

    );
}
export default NodoLista;