import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardPlanets = ({ planets }) => {

    const { store, dispatch } = useGlobalReducer();
     const isFavorite = store.favorites.includes(planets.name);

    return (
        <div className="bg-dark p-2">

            <div className="card" style={{ width: "18rem" }}>

                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`}
                    className="card-img-top"
                    alt={planets.name}
                    style={{
                        height: "300px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h5 className="card-title">{planets.name}</h5>

                    <div className="d-flex align-items-center w-100">

                        <Link
                            to={`/planets/${planets.uid}`}
                            className="btn btn-outline-primary"
                        >
                            Learn More
                        </Link>

                        <button
                            className="btn ms-auto"
                            onClick={() => {
                                if (isFavorite) {
                                    dispatch({
                                        type: "remove_favorite",
                                        payload: planets.name
                                    });
                                } else {
                                    dispatch({
                                        type: "add_favorite",
                                        payload: planets.name
                                    });
                                }
                            }}
                        >
                            <span
                                style={{
                                    color: isFavorite ? "#ff4d4d" : "#ccc",
                                    fontSize: "20px"
                                }}
                            >
                                ♥
                            </span>
                        </button>

                    </div>

                </div>
            </div>

        </div>
    );
};