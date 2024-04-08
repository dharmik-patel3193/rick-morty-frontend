import { Link } from "react-router-dom";

const Card = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="card">
                <Link to={`/single-data/${data.id}`}><img src={data.image} alt="" /></Link>
                <h1>Name = {data.name}</h1>
                <h1>Gender = {data.gender}</h1>
                <h2>Location Name = {data.location.name}</h2>
                <div className="dot" style={{ backgroundColor: (data.status == "Alive") ? "forestgreen" : (data.status == "Dead") ? "red" : "grey" }}></div><span>{data.status}</span>
            </div>
        </>
    )
}

export default Card;