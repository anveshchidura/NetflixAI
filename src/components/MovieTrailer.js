// MovieTrailer.js

import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { id } = useParams();
  const movieTrailer = useSelector((state) => state.movies.trailerVideo);

  useMovieTrailer(id); // Fetch and update trailerVideo based on movie ID

  return (
    <div className="h-full w-full relative">
      {movieTrailer ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="text-white text-xl absolute top-0 left-0 w-full h-full flex items-center justify-center">
          No trailer for this video is found
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
