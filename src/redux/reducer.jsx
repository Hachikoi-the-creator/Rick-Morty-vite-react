// import all action types
import {
  FETCH_ONE_CHARACTER,
  FETCH_DEFAULT_CHARACTERS,
  UPDATE_LOADING,
  REMOVE_ONE_CHARACTER,
  TOGGLE_ONE_FAVOURITE,
} from "./actions";

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
      let updatedSelectedChara;
      let laggedChara;

      //? update state.charaList[id] isFav to true(the opposite later on)
      const updatedToggleState = state.charaList.map((e) => {
        if (e.id === action.payload) {
          updatedSelectedChara = { ...e, isFav: !e.isFav };
          laggedChara = e;
          return updatedSelectedChara;
        }
        return e;
      });

      //? add favourite character to state.myFavourites
      let updatedFavourites = [];
      if (laggedChara.isFav) {
        // was favourite before being changed? if so, remove it from state
        updatedFavourites = state.myFavourites.filter(
          (e) => e.id !== laggedChara.id
        );
      }

      // add new favourite to state, if it's new
      else {
        updatedFavourites = [...state.myFavourites, updatedSelectedChara];
      }

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
    default:
      return { ...state };
  }
};
