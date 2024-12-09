import axios from "axios";
import { hostUrl } from "../../hostUrl";
import { GET_PAGEDATA, GET_PAGEDATA_START, GET_PAGEDATA_ERROR } from "./types";

export const getPageData = (pageId) => async (dispatch) => {
  // Dispatch to set isLoading = true
  dispatch({
    type: GET_PAGEDATA_START
  });

  // Dynamically Fetch pageData based on pageId endpoint
  const URL = `${hostUrl}${pageId}-pagedata`;

  try {
    const res = await axios.get(URL).then((response) => response.data);

    dispatch({
      type: GET_PAGEDATA,
      payload: res
    });
  } catch (error) {
    // Error handling
    let errorMessage = "An unexpected error occurred.";
    if (error.response) {
      errorMessage = `Error: ${error.response.status} - ${
        error.response.data.message || error.response.statusText
      }`;
    } else if (error.request) {
      errorMessage = "No response from the server. Please try again.";
    } else {
      errorMessage = `Request failed: ${error.message}`;
    }

    //  Dispatch the error
    dispatch({
      type: GET_PAGEDATA_ERROR,
      payload: errorMessage,
    });
  }
};
