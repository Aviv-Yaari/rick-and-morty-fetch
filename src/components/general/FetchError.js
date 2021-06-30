import { Button, Container } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

const FetchError = (props) => {
  const { fetchData } = useFetch();
  const clickHandler = (event) => {
    event.preventDefault();
    const url = `https://rickandmortyapi.com/api/character/${props.id}`;
    fetchData(url);
  };

  return (
    <Container className="text-center my-5">
      <p>
        {props.error}, Character id: {props.id}
      </p>
      <Button onClick={clickHandler}>Try again?</Button>
    </Container>
  );
};

export default FetchError;
