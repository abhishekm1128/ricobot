import { GET_PAGEDATA } from "./types";

export const initialState = {
  articleText: {},
  articleImages: {},
};

export default function (state = initialState, action) {
  if (!action.payload) return state;
  switch (action.type) {
    case GET_PAGEDATA:
      return {
        ...state,
        articleText: action.payload["article-text"],
        articleImages: action.payload["article-images"],
      };
    default:
      return state;
  }
}
