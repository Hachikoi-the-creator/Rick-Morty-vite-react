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
      // *update state.charaList[id] isFav to true(the opposite later on)
      const updatedToggleState = state.charaList.map((e) => {
        if (e.id === action.payload) {
          console.log("before change", e);
          const res = { ...e, isFav: !e.isFav };
          console.log("AFTERchange", res);
          return res;
        }
        return e;
      });
      return {
        ...state,
        charaList: updatedToggleState,
      };
    // *add favourite character to state.myFavourites
    // const favChara = state.charaList.find((e) => e.id === action.payload);
    // const isRepeated = state.myFavourites.filter(
    //   (e) => e.id === action.payload
    // );
    // // console.log("rep", isRepeated, favChara);
    // const updatedFavList = [...state.myFavourites, favChara];
    // console.log(updatedFavList);

    // return isRepeated.length
    //   ? {
    //       ...state,
    //       myFavourites: updatedFavList,
    //     }
    //   : { ...state };
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
    // case UPDATE_FAVOURITES:
    //   const updatedCharaState = state.charaList.map((e) => {
    //     if (e.id === action.payload) {
    //       // console.log("before change", e);
    //       const res = { ...e, isFav: !e.isFav };
    //       // console.log("AFTERchange", res);
    //       return res;
    //     }
    //     return e;
    //   });

    // return {
    //   ...state,
    //   charaList: updatedCharaState,
    // };
    // * ------------------------------------------------------
    default:
      return { ...state };
  }
};
