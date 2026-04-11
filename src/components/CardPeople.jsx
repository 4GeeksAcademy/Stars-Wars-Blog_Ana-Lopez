import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {

    return (
        <nav className="navbar navbar-light bg-dark">
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
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>

                        <Link to={`/character/${people.uid}`} className="btn btn-primary">Learn More</Link>
                        {/* <button>fav</button> */}
                    </div>
                </div>

            </div>
        </nav>
    );
};