import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import CachceItem from "./CacheItem";
import { clearCache } from "../../store/cacheSlice";
const CacheList = () => {
  const { cache } = useSelector((state) => state.cache);
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearCache());
  };

  return (
    <section className="text-center mt-5">
      <h3>Search History:</h3>
      <Container className="d-flex justify-content-center my-3">
        {cache.map((character) => (
          <CachceItem
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        ))}
      </Container>
      <Button onClick={clearHandler}>Clear search history</Button>
    </section>
  );
};

export default CacheList;
