import React, { Fragment, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CharData from "./components/CharData";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import FetchError from "./components/general/FetchError";
import { useDispatch, useSelector } from "react-redux";
import CacheList from "./components/cache/CacheList";
import { loadFromHistory } from "./store/cacheSlice";
function App() {
  const { isLoading, error, currentSearch } = useSelector((state) => state.app);
  const { name } = useSelector((state) => state.character);
  const { cache } = useSelector((state) => state.cache);
  const dispatch = useDispatch();

  // On app refresh - load cache from localstorage
  useEffect(() => {
    const cacheHistory = JSON.parse(localStorage.getItem("RickMortyCache"));
    dispatch(loadFromHistory(cacheHistory));
  }, [dispatch]);

  // On every cache change - update localstorage
  useEffect(() => {
    localStorage.setItem("RickMortyCache", JSON.stringify(cache));
  }, [cache]);

  return (
    <Fragment>
      <h1 className="text-center mb-5">The Rick and Morty API!</h1>
      <SearchBar />
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error && name && <CharData />}
      {error && <FetchError error={error} id={currentSearch} />}
      <CacheList />
    </Fragment>
  );
}

export default App;
