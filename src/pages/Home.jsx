// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
// import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// export const Home = () => {

//   const {store, dispatch} =useGlobalReducer()

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 		</div>
// 	);
// }; 

import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";// lo q me conecta de forma global mediante el archivo useGlobalReducer.jsx
import { CardPeople } from "../components/CardPeople.jsx";
import React, { useEffect } from "react"

export const Home= () => {
	//con esta linea le pido exactamente que traer desde el archivo useGlobalReducer.jsx
	const { store, dispatch } = useGlobalReducer()
				   //el dispatch es el mensajero que me va a cambiar lo q ue haya en el store

	async function cartaPersonajes() {
		try {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
				throw new Error(`Error al obtener peronajes: ${response.statusText}`)
			}
			const data = await response.json()
			const personajesBasicos = data.results;
			dispatch({
				type: "set_personajes",
				payload: { personaje: personajesBasicos }
			})

		} catch (error) {
			console.error("Error en cargar personajes:", error)
		}
	}

	//Aqui llamamos a la funcion directamente al cargar la pagina
	useEffect(() => {
		cartaPersonajes()

	})


	return (
		<div className="container">
			<h2>Starwars </h2>
			<h3>People</h3>
			 <div className= "d-flex" style={{overflow: "auto"}}>
				{/* //mapeamos la carta */}
				{store.character?.map((value, index) => {
					return (
						<CardPeople key={index} people={value} />
					)
				})}
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
}; 