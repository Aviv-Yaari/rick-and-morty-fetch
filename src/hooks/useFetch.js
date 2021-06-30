import { useDispatch } from "react-redux";
import { setError, setLoading } from "../store/appSlice";
import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const fetchData = useCallback(
    async (url) => {
      console.log("fetch", url);
      dispatch(setLoading(true));
      dispatch(setError(null));
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Sorry! an error occured");
        const data = await response.json();
        setData(data);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(error.toString()));
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );
  return { fetchData, data };
};
export default useFetch;
