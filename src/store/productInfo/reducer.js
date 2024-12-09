import { GET_PAGEDATA, GET_PAGEDATA_START, GET_PAGEDATA_ERROR } from "./types";

export const initialState = {
  articleText: {},
  articleImages: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (!action.payload) return state;
  switch (action.type) {
    case GET_PAGEDATA_START:
      return { ...state, isLoading: true, error: null };
    case GET_PAGEDATA:
      return {
        ...state,
        articleText: action.payload["article-text"] || {},
        articleImages: action.payload["article-images"] || [],
        isLoading: false,
        error: null
      };
    case GET_PAGEDATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
