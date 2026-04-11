import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu3dgPb2v4ezDM91oP68dvhKD2WjCYVEpsw&s" alt="Starwars" width="150" />
				</Link>
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
									className="dropdown-item d-flex justify-content-between"
								>{fav}

								<button
									className="btn btn-sm btn-danger"
									onClick={() =>
									dispatch({
										type: "remove_favorite",
										payload: fav
										})
									}
									>
										x
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