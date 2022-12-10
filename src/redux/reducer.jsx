// import all action types
import {
  FETCH_ONE_CHARACTER,
  FETCH_DEFAULT_CHARACTERS,
  UPDATE_LOADING,
  REMOVE_ONE_CHARACTER,
  TOGGLE_ONE_FAVOURITE,
  FETCH_ONE_RANDOM,
} from "./actions";
// helpers imports
import {
  toggleOneFavouriteHelper,
  fetchNewCharacterHelper,
} from "../utils/reduxReducerHelper";

const initialState = {
  loading: false,
  charaList: [],
  myFavourites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEFAULT_CHARACTERS:
      return state.charaList.length
        ? { ...state }
        : {
            ...state,
            charaList: action.payload,
          };
    // * ------------------------------------------------------
    case UPDATE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    // * ------------------------------------------------------
    case TOGGLE_ONE_FAVOURITE:
      const [updatedToggleState, updatedFavourites] = toggleOneFavouriteHelper(
        state,
        action
      );

      return {
        ...state,
        charaList: updatedToggleState,
        myFavourites: updatedFavourites,
      };

    // * ------------------------------------------------------
    case REMOVE_ONE_CHARACTER:
      const updatedState = state.charaList.filter(
        (e) => e.id !== action.payload
      );

      return {
        ...state,
        charaList: updatedState,
      };

    // * ------------------------------------------------------
    case FETCH_ONE_CHARACTER:
      const [didFoundNew, updatedCharaList] = fetchNewCharacterHelper(
        state,
        action
      );

      return didFoundNew
        ? {
            ...state,
            charaList: updatedCharaList,
          }
        : { ...state };
    // * ------------------------------------------------------
    case FETCH_ONE_RANDOM:
      // if already is inside the current charaList, just return the past state, if not update
      const radomCharaGot = action.payload;
      const isRepeated = state.charaList.filter(
        (e) => e.id === radomCharaGot.id
      );
      const updatedStateRandom = [...state.charaList, radomCharaGot];

      return isRepeated.length
        ? { ...state }
        : { ...state, charaList: updatedStateRandom };

    // * ------------------------------------------------------
    default:
      return { ...state };
  }
};
