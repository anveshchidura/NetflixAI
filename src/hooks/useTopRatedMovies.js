import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && fetchMovieList();
    // eslint-disable-next-line
  }, []);

  const fetchMovieList = async () => {
    const options = API_OPTIONS;
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
    const json = await result.json();

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;