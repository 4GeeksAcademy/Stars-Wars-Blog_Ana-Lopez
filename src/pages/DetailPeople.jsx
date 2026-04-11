import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState} from "react";


export const DetailPeople = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams()

    const [personaje, setPersonaje] = React.useState(null)

    function detallePersonaje() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setPersonaje(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detallePersonaje()

    }, [uid])

    if (!personaje) return <p>Loading...</p>


    return (
        <div className="container">

            <div className="card" style={{ width: "18rem;" }}>
                <img
                 src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} 
                    className="card-img-top" 
                    alt={personaje.name}
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">Gender: {personaje.gender}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Height: {personaje.height}</li>
                    <li className="list-group-item">Mass: {personaje.mass}</li>
                    <li className="list-group-item">Hair color: {personaje.hair_color}</li>
                    <li className="list-group-item">Eye color: {personaje.eye_color}</li>
                </ul>


            </div>
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}; 