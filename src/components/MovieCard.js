
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ posterPath, id }) => {
  const navigate = useNavigate(); // Get the navigate function from react-router
  
  const handleClick = () => {
    // Navigate to the movie details page
    navigate(`/browse/${id}`);
  };

  return (
    posterPath && (
      <div className="px-2 w-40 md:w-56 cursor-pointer" onClick={handleClick}>
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    )
  );
};

export default MovieCard;
