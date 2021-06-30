import { Form, Button, Container } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/characterSlice";
import { addToCache, checkSearchInCache } from "../store/cacheSlice";
import { setCurrentSearch } from "../store/appSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { fetchData, data } = useFetch();
  const { isLoading, error, currentSearch } = useSelector((state) => state.app);
  const { searchInCache } = useSelector((state) => state.cache);
  const [input, setInput] = useState(0);
  const [isSearchHidden, setIsSearchHidden] = useState(false);

  // Handlers
  const inputHandler = (event) => {
    const idInput = event.target.value;
    setInput(idInput);
    setIsSearchHidden(false);
    dispatch(checkSearchInCache(idInput));
  };
  const searchHandler = (event) => {
    event.preventDefault();
    dispatch(setCurrentSearch(input));
  };
  const randomHandler = (event) => {
    event.preventDefault();
    dispatch(setCurrentSearch(Math.ceil(Math.random() * 100) + 1));
  };

  // Fetch data
  useEffect(() => {
    if (!currentSearch) {
      return;
    }
    setInput(currentSearch);
    const url = `https://rickandmortyapi.com/api/character/${currentSearch}`;
    fetchData(url);
  }, [currentSearch, fetchData]);

  // Hide search button in case of error
  useEffect(() => {
    if (error) setIsSearchHidden(true);
    else setIsSearchHidden(false);
  }, [error]);

  // Update data after fetch
  useEffect(() => {
    if (!data) return;
    const { id, name, image, species, status } = data;
    dispatch(setDetails({ id, name, image, species, status }));
    dispatch(addToCache({ id, name, image, species, status }));
    dispatch(checkSearchInCache(id));
  }, [dispatch, data]);

  // Search in cache..
  useEffect(() => {
    if (searchInCache) dispatch(setDetails({ ...searchInCache }));
  }, [searchInCache, dispatch]);

  return (
    <Container className="p-5 bg-light" style={{ width: "500px" }}>
      <Form.Label>Character Number:</Form.Label>
      <Form.Control type="number" value={input} onChange={inputHandler} />
      <div className="d-flex justify-content-center mt-3">
        <Button
          hidden={isSearchHidden}
          onClick={searchHandler}
          variant="primary"
          className="mx-4"
        >
          Search
        </Button>
        <Button
          hidden={isLoading}
          onClick={randomHandler}
          variant="warning"
          className="mx-4"
        >
          Random
        </Button>
      </div>
      <p className="text-center mt-3">
        Character {input} is {searchInCache ? "in" : "not in"} your cache!
      </p>
    </Container>
  );
};

export default SearchBar;
