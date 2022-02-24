import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addToFavorite } from "../Store/Actions/favAction";
import Card from "../Components/card";

export default function Favorites() {
  const FavArr = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();

  const addFaveMovie = (id) => {
    if (FavArr.length !== 0 && FavArr.includes(id)) {
      const index = FavArr.indexOf(id);
      if (index >= 0) {
        FavArr.splice(index, 1);
      }
      dispatch(addToFavorite([...FavArr]));
    } else {
      dispatch(addToFavorite([id, ...FavArr]));
    }
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0e994d4cb38598ce88b1c98b9de848e1"
      )

      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  const favMovies = movies.filter((movie) => {
    return FavArr.includes(movie.id);
  });

  return (
    <>
      <h1>Favorite Movies</h1>
      <div className="container">
        <div className="row">
          {favMovies.map((movies) => {
            return (
              //   <div
              //   className="card mb-5 bg-light text-dark"
              //   style={{ width: "20rem", height: "60rem" }}
              // >
              //   <img
              //   src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
              //   className="card-img-top"
              // ></img>
              // <div className="card-body" key={movies.id} id={movies.id}>
              //   <h5 className="card-title">{movies.title}</h5>
              //   <p className="card-text">{movies.status}</p>
              //   <p className="card-text">{movies.overview}</p>
              //   <button className="btn btn-primary" onClick={addFaveMovie}>Remove from favorites </button>
              //    </div>
              //    </div>
              <Card
                key={movies.id}
                img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                title={movies.title}
                vote={movies.vote_average}
                addFavorite={addFaveMovie}
                id={movies.id}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
