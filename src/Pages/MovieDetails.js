import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const params = useParams();
  console.log(params, "hook");
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=0e994d4cb38598ce88b1c98b9de848e1`
      )
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Movie Details</h1>
      <div className="container">
        <div className="row">
          <div
            className="card mb-5 bg-light text-dark"
            style={{ width: "20rem", height: "60rem" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              className="card-img-top"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{details.title}</h5>
              <p className="card-text">{details.status}</p>
              <p className="card-text">{details.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDetails;
