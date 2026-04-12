import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";// lo q me conecta de forma global mediante el archivo useGlobalReducer.jsx
import { CardPeople } from "../components/CardPeople.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import React, { useEffect } from "react"

export const Home = () => {
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
				payload: { people: personajesBasicos }
			})

		} catch (error) {
			console.error("Error en cargar personajes:", error)
		}
	}

	//Aqui llamamos a la funcion directamente al cargar la pagina
	useEffect(() => {
		cartaPersonajes()

	}, [])

	async function cartaPlanetas() {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
				throw new Error(`Error al obtener planeta: ${response.statusText}`)
			}
			const data = await response.json()
			const planetasBasico = data.results;
			dispatch({
				type: "set_planets",
				payload: { planets: planetasBasico }
			})

		} catch (error) {
			console.error("Error en cargar planetas:", error)
		}
	}
	useEffect(() => {
		cartaPlanetas()
	}, [])

	return (
		<div className="container">
			<h2>Starwars </h2>
			<h3>People</h3>
			<div className="d-flex gap-3 overflow-auto align-items-stretch">
				{/* //mapeamos la carta */}
				{store.people.map((people) => (
					<CardPeople key={people.uid} people={people} />
				))}
			</div>
			<h3>Planets</h3>
			<div className="d-flex gap-3 overflow-auto align-items-stretch">
				{/* //mapeamos la carta */}
				{store.planets.map((planets) => (
					<CardPlanets key={planets.uid} planets={planets} />
				))}
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>

	);
}; 