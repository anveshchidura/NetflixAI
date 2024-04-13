// useMovieTrailer.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo, clearTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        dispatch(clearTrailerVideo()); // Clear previous trailer video
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trailer");
        }

        const data = await response.json();

        const trailer = data.results.find((result) => result.type === "Trailer");

        if (trailer) {
          dispatch(addTrailerVideo(trailer));
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    fetchMovieTrailer();

    return () => {
      dispatch(clearTrailerVideo()); // Clear trailer video on component unmount
    };
  }, [dispatch, id]);

  return trailerVideo;
};

export default useMovieTrailer;
