import { Container } from "react-bootstrap";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <Container
      className="d-flex justify-content-center bg-light mt-5"
      style={{ width: "500px" }}
    >
      <div className={classes.spinner}></div>
    </Container>
  );
};

export default LoadingSpinner;
