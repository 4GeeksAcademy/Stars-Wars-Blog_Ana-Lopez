import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const allItems = [
		...store.people.map(i => ({ ...i, type: "character" })),
		...store.planets.map(i => ({ ...i, type: "planets" })),
		...store.vehicles.map(i => ({ ...i, type: "vehicles" }))
	];

	const filtered = allItems.filter(item =>
		item.name.toLowerCase().includes(search.toLowerCase())
	);


	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu3dgPb2v4ezDM91oP68dvhKD2WjCYVEpsw&s" alt="Starwars" width="150" />
				</Link>


				<div className="position-relative">
					<i
						className="fas fa-search position-absolute"
						style={{
							left: "10px",
							top: "50%",
							transform: "translateY(-50%)",
							color: "#999",
							fontSize: "14px"
						}}
					></i>

					<input
						type="text"
						className="form-control ps-5"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						style={{
							borderRadius: "20px"
						}}
					/>


					{search && (
						<ul className="list-group position-absolute w-100 mt-1">
							{filtered.slice(0, 5).map(item => (
								<li
									key={item.uid}
									className="list-group-item list-group-item-action"
									onClick={() => {
										navigate(`/${item.type}/${item.uid}`);
										setSearch("");
									}}
								>
									{item.name}
								</li>
							))}
						</ul>
					)}

				</div>



				<div className="dropdown">

					<button
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
					>Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu">

						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">
								No favorites yet
							</li>
						) : (
							store.favorites.map((fav, index) => (
								<li
									key={index}
									className="dropdown-item d-flex justify-content-between align-items-center"
								>{fav}

									<button
										className="btn"
										onClick={() =>
											dispatch({
												type: "remove_favorite",
												payload: fav
											})
										}
									>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						)}

					</ul>
				</div>
			</div>

		</nav>
	)
}