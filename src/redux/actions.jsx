import { getTotalChara } from "../utils/axiosHandlers";

export const FETCH_DEFAULT_CHARACTERS = "FETCH_DEFAULT_CHARACTERS";
export const FETCH_ONE_CHARACTER = "FETCH_ONE_CHARACTER";
export const FETCH_ONE_RANDOM = "FETCH_ONE_RANDOM";
// helpter to know when the state has been updated, more fuency, less rendering problems
export const UPDATE_LOADING = "UPDATE_LOADING";
// x button in main page
export const REMOVE_ONE_CHARACTER = "REMOVE_ONE_CHARACTER";
// heart button in main page
export const TOGGLE_ONE_FAVOURITE = "TOGGLE_ONE_FAVOURITE";

// * UPDATE_LOADING
export function updateLoading() {
  return {
    type: UPDATE_LOADING,
  };
}

//* FETCH_DEFAULT_CHARACTERS
export function fetchDefaultCharacters() {
  return function (dispatch) {
    dispatch(updateLoading());
    fetch(`https://rickandmortyapi.com/api/character/[1,7,8,9]`)
      .then((response) => response.json())
      .then((data) => {
        // add isFav propierty to everyone, to later keep track of who has beena dded to favourites
        const updatedData = data.map((e) => ({ ...e, isFav: false }));

        dispatch({ type: FETCH_DEFAULT_CHARACTERS, payload: updatedData });
        dispatch(updateLoading());
      });
  };
}

// * Used in search by name w/api
export function fetchOneCharacter(charaName) {
  return function (dispatch) {
    dispatch(updateLoading());
    fetch(`https://rickandmortyapi.com/api/character/?name=${charaName}`)
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: FETCH_ONE_CHARACTER, payload: data.results });
        dispatch(updateLoading());
      });
  };
}

// * FETCH_ONE_RANDOM, uses an util to make anothe api call and get the totall amount of characters in the API
export function fetchRandomCharacter() {
  return function (dispatch) {
    dispatch(updateLoading());

    getTotalChara().then((totalCharaNum) => {
      const rndInt = Math.floor(Math.random() * totalCharaNum) + 1;

      fetch(`https://rickandmortyapi.com/api/character/${rndInt}`)
        .then((data) => data.json())
        .then((res) => {
          const updatedChara = { ...res, isFav: false };

          dispatch({ type: FETCH_ONE_RANDOM, payload: updatedChara });
          dispatch(updateLoading());
        });
    });
  };
}

// * REMOVE_ONE_CHARACTER
export function removeOneCharacter(id) {
  return {
    type: REMOVE_ONE_CHARACTER,
    payload: id,
  };
}

// * TOGGLE_ONE_FAVOURITE, when we click on heart icon
export function toggleOneFavourite(id) {
  return {
    type: TOGGLE_ONE_FAVOURITE,
    payload: id,
  };
}
