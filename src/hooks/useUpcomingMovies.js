import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && fetchMovieList();

  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch( "https://api.themoviedb.org/3/movie/upcoming?page=1", options);
    const json = await result.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;