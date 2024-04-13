
import React, { useEffect, useState } from "react";
import MovieTrailer from "./MovieTrailer";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Extract id parameter from URL

  const trailerVideo = useMovieTrailer(id); // Pass id to custom hook

  useEffect(() => {
    if (trailerVideo) {
      setIsLoading(false);
    }
  }, [trailerVideo]);

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row bg-black overflow-x-hidden h-screen">
      {!isLoading && (
        <div className="flex-1 h-1/2 md:h-full">
          <MovieTrailer trailer={trailerVideo} />
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default MoviePage;
