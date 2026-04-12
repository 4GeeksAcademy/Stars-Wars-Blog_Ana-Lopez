import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";


export const DetailPlanet = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams()

    const [planets, setPlanets] = React.useState(null)

    function detallePlaneta() {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(res => res.json())
            .then(data => setPlanets(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detallePlaneta()

    }, [uid])

    if (!planets) return <p>Loading...</p>


    return (
        <div className="container d-flex justify-content-center flex-column align-items-center">

            <div className="card" style={{ width: "600px" }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`}
                    className="card-img-top"
                    alt={planets.name}
                    style={{
                        height: "450px",
                        objectFit: "contain"
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{planets.name}</h5>
                    <p className="card-text">Cargo Capacity: {planets.cargo_capacity}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Climate: {planets.climate}</li>
                    <li className="list-group-item">Created: {planets.created}</li>
                    <li className="list-group-item">Diameter: {planets.diameter}</li>
                    <li className="list-group-item">Gravity: {planets.gravity}</li>
                </ul>


            </div>
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}; 