import React from "react";
import { Link } from "react-router-dom"
import { useSelector} from "react-redux"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar} from '@fortawesome/free-solid-svg-icons'


function Card(props) {
    const FavArr = useSelector((state) => state.favoriteMovies);
    const { id, img, title } = props;
    return (
      <div className="card movie_card">
        <Link key={id} to={`/MovieDetails/${id}`} className="movie-card-style">
          <img src={img} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
  
          <p className="movie_info"></p>
          <div className="img-container">
            <span className="movie_info">
              {FavArr.includes(id) ? (
                 <button  className="btn btn-danger" onClick={props.addFavorite.bind(this, id)} >add to favorites</button>
                // <FontAwesomeIcon  icon={faStar} onClick={props.addFavorite.bind(this, id)} />
              ) : (
                 <button  className="btn btn-info" onClick={props.addFavorite.bind(this, id)} >add to favorites</button>
                // <FontAwesomeIcon  icon={faStar} onClick={props.addFavorite.bind(this, id)} />
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;