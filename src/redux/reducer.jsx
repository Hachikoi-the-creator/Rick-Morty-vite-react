// import all action types
import { GET_DEFAULT_CHARACTERS, GET_ONE_CHARACTER } from "./actions";

const initialState = {
  loading: false,
  charas: [],
  myFavourites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFAULT_CHARACTERS:
      return {
        ...state,
        charas: action.payload,
      };

    case GET_ONE_CHARACTER:
      return {
        ...state,
        charas: action.payload,
      };

    default:
      return { ...state };
  }
};
