import axios from "axios";
import { GET_PAGEDATA, GET_PAGEDATA_START, GET_PAGEDATA_ERROR } from "./types";

export const getPageData = (pageId) => async (dispatch) => {
  dispatch({
    type: GET_PAGEDATA_START,
    payload: pageId, // Ensure the correct pageId is passed
  });

  const URL = `http://localhost:5000/${pageId}-pagedata`;

  try {
    const res = await axios.get(URL).then((response) => response.data);

    dispatch({
      type: GET_PAGEDATA,
      payload: res, // Pass the fetched data to the reducer
    });
  } catch (error) {
    // Handle errors and dispatch an error action
    let errorMessage = "An unexpected error occurred.";
    if (error.response) {
      // Server responded with a status code out of the 2xx range
      errorMessage = `Error: ${error.response.status} - ${
        error.response.data.message || error.response.statusText
      }`;
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "No response from the server. Please try again.";
    } else {
      // Something else caused the error
      errorMessage = `Request failed: ${error.message}`;
    }

    dispatch({
      type: GET_PAGEDATA_ERROR,
      payload: errorMessage, // Dispatch the error message
    });
  }
};
