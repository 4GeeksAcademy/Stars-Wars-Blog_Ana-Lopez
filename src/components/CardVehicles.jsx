import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardVehicles = ({ vehicles }) => {

    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.includes(vehicles.name);

    return (
        <div className="bg-dark p-2">

            <div className="card" style={{ width: "18rem" }}>

                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicles.uid}.jpg`}
                    className="card-img-top"
                    alt={vehicles.name}
                    style={{
                        height: "300px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h5 className="card-title">{vehicles.name}</h5>

                    <div className="d-flex align-items-center w-100">

                        <Link
                            to={`/vehicles/${vehicles.uid}`}
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
                                        payload: vehicles.name
                                    });
                                } else {
                                    dispatch({
                                        type: "add_favorite",
                                        payload: vehicles.name
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