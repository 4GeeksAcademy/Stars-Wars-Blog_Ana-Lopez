import { Link } from "react-router-dom";
import { useState } from "react";

export const CardPeople = ({ people }) => {

    const [liked, setLiked] = useState(false);

    return (
        <div className="navbar navbar-light bg-dark">
            <div className="container">

                <div className="card">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`}
                        className="card-img-top"
                        style={{
                            height: "300px",
                            width: "250px",
                            objectFit: "cover"
                        }}
                    />
                    <div className="card-body" >

                        <h5 className="card-title">{people.name}</h5>
                        <div className="d-flex align-items-center w-100">
                            <Link to={`/character/${people.uid}`} className="btn btn-outline-primary">Learn More</Link>
                            <button
                                className="btn ms-auto"
                                onClick={() => setLiked(!liked)}
                            >
                                <span
                                    style={{
                                        color: liked ? "#ff4d4d" : "#ccc",
                                        fontSize: "20px",
                                    }}
                                >
                                    ♥
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};