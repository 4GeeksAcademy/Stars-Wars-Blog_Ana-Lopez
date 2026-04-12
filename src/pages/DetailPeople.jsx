import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";


export const DetailPeople = () => {

    const { store, dispatch } = useGlobalReducer()

    const { uid } = useParams()

    const [people, setpeople] = React.useState(null)

    function detallepeople() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setpeople(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detallepeople()

    }, [uid])

    if (!people) return <p>Loading...</p>


    return (
        <div className="container d-flex justify-content-center flex-column align-items-center" style={{ minHeight: "80vh" }}>

            <div className="card" style={{ width: "600px" }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`}
                    className="card-img-top"
                    alt={people.name}
                    style={{
                        height: "450px",
                       
                        objectFit: "contain"
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>
                    <p className="card-text">Gender: {people.gender}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Height: {people.height}</li>
                    <li className="list-group-item">Mass: {people.mass}</li>
                    <li className="list-group-item">Hair color: {people.hair_color}</li>
                    <li className="list-group-item">Eye color: {people.eye_color}</li>
                </ul>


            </div>
            <Link to="/">
                <button className="btn btn-primary mt-5">Back home</button>
            </Link>
        </div>
    );
}; 