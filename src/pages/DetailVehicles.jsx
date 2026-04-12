import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";


export const DetailVehicles = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams()

    const [vehicles, setVehicles] = React.useState(null)

    function detalleVehiculos() {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => setVehicles(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detalleVehiculos()

    }, [uid])

    if (!vehicles) return <p>Loading...</p>


    return (
        <div className="container d-flex justify-content-center flex-column align-items-center">

            <div className="card" style={{ width: "600px" }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`}
                    className="card-img-top"
                    alt={vehicles.name}
                    style={{
                        height: "450px",
                       
                        objectFit: "contain"
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{vehicles.name}</h5>
                    <p className="card-text">Model: {vehicles.model}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cargo Capacity: {vehicles.cargo_capacity}</li>
                    <li className="list-group-item">Consumables: {vehicles.consumables}</li>
                    <li className="list-group-item">created": {vehicles.created}</li>
                    <li className="list-group-item">Crew: {vehicles.ecrew}</li>
                </ul>


            </div>
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}; 