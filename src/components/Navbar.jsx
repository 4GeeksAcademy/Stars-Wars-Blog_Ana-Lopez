import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu3dgPb2v4ezDM91oP68dvhKD2WjCYVEpsw&s" alt="Starwars" width="150" />
				</Link>
				<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
			</div>
			
		</nav>
	)
}