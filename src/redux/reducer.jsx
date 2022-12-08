// import all action types
import {
  FETCH_ONE_CHARACTER,
  FETCH_DEFAULT_CHARACTERS,
  UPDATE_LOADING,
  REMOVE_ONE_CHARACTER,
  TOGGLE_ONE_FAVOURITE,
  FETCH_ONE_RANDOM,
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

    case FETCH_ONE_CHARACTER:
      // check if the received chara is not already in the state, if so, return past state, whit no changes
      // ? makes easier to check if I already have that character
      const idsAlreadyHave = state.charaList.map((e) => e.id);

      for (let i = 0; i < action.payload.length; i++) {
        const currChara = action.payload[i];
        console.log(currChara);
        // new  chara
        if (!idsAlreadyHave.includes(currChara.id)) {
          const fetchOneUpdatedCharaList = [...state.charaList, currChara];

          return { ...state, charaList: fetchOneUpdatedCharaList };
        }
      }

      // if I could not find a new rick
      console.log("Already have all the characters whit that name O:");
      return {
        ...state,
      };
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
