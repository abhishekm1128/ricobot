import axios from "axios";
import { GET_PAGEDATA } from "./types";

export const getPageData = () => async (dispatch) => {
  const URL = "http://localhost:5000/ricobot-pagedata";

  const res = await axios.get(URL).then((response) => response.data);

  dispatch({
    type: GET_PAGEDATA,
    payload: res,
  });
};
