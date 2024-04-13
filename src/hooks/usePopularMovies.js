import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovies && fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", options);
    const json = await result.json();

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;