import { Image, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const CharData = () => {
  const { id, name, image, species, status } = useSelector(
    (state) => state.character
  );
  return (
    <Container
      className="d-flex bg-light mt-5 p-5"
      style={{ width: "500px", borderRadius: "50px" }}
    >
      <div className="mr-5">
        <Image src={image} roundedCircle height="150px" width="150px" />
      </div>
      <div>
        <p>id: {id}</p>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </Container>
  );
};

export default CharData;
