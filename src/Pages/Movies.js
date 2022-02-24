import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite } from "../Store/Actions/favAction";
import Card from "../Components/card";
// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { faStar} from '@fortawesome/free-solid-svg-icons'

function Movies() {
  const FavArr = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();

  // const { id } = props;

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

  return (
    <>
      <h1>Movies</h1>
      <div className="container my-5">
        <div className="row">
          {movies.map((movies) => {
            console.log(movies);
            return (
              <div className="col-3">
                {/* <Link key={movies.id} to={`/MovieDetails/${movies.id}`}>
                           <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} className='card-img-top'></img>
                           </Link>
                           <div className="card">
                           <div className="card-body">
                               <h4 className="card-title">{movies.title}</h4>
                               <p className="card-text">Views:{movies.popularity}</p>
                               <button className="btn btn-primary" onclick={addFaveMovie}>Add to Favorites</button>
                               {/* <FontAwesomeIcon icon={faStar} onClick={props.addFav.bind(this, id)} /> */}
                {/* </div> */}
                <Card
                  id={movies.id}
                  key={movies.id}
                  img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  title={movies.title}
                  vote={movies.vote_average}
                  addFavorite={addFaveMovie}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
