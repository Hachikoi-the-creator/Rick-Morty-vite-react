export const FETCH_DEFAULT_CHARACTERS = "FETCH_DEFAULT_CHARACTERS";
export const REMOVE_ONE_CHARACTER = "REMOVE_ONE_CHARACTER";
export const TOGGLE_ONE_FAVOURITE = "TOGGLE_ONE_FAVOURITE";
export const UPDATE_LOADING = "UPDATE_LOADING";
export const FETCH_ONE_CHARACTER = "FETCH_ONE_CHARACTER";
export const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";
// TODO: first migrate the app succesfully
// export const ADD_CHARA_TO_FAVOURITES = "ADD_CHARA_TO_FAVOURITES";
// todo: may add later this tuff
// export const REMOVE_CHARA_TO_FAVOURITES = "REMOVE_CHARA_TO_FAVOURITES";

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
    fetch(`https://rickandmortyapi.com/api/character/[7,8,9]`)
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
export function fetchOneCharacter(id) {
  return function (dispatch) {
    dispatch(updateLoading());
    fetch(`https://rickandmortyapi.com/api/character/69`)
      .then((response) => response.json())
      .then((data) => {
        // add isFav propierty, to later keep track of who has beena dded to favourites
        const updatedData = { ...data, isFav: false };

        dispatch({ type: FETCH_ONE_CHARACTER, payload: updatedData });
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

// * UPDATE_FAVOURITES, keep track of who has been added to favourites in the global state
export function updateFavourites(id) {
  return {
    type: UPDATE_FAVOURITES,
    payload: id,
  };
}
