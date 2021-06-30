import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setError } from "../../store/appSlice";
import { setDetails } from "../../store/characterSlice";
import classes from "./CacheItem.module.css";

const CacheItem = (props) => {
  const { id, name, image, species, status } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setError(null));
    dispatch(setDetails({ id, name, image, species, status }));
  };

  return (
    <div className="d-flex flex-column">
      <Image
        className={classes.item}
        key={id}
        src={image}
        thumbnail
        height="50px"
        width="50px"
        onClick={clickHandler}
      />
      <span>{id}</span>
    </div>
  );
};

export default CacheItem;
