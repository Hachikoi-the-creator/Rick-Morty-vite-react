export const GET_DEFAULT_CHARACTERS = "GET_DEFAULT_CHARACTERS";
export const GET_ONE_CHARACTER = "GET_ONE_CHARACTER";
export const REMOVE_ONE_CHARACTER = "REMOVE_ONE_CHARACTER";
export const UPDATE_LOADING = "UPDATE_LOADING";
// TODO: first migrate the app succesfully
// export const ADD_CHARA_TO_FAVOURITES = "ADD_CHARA_TO_FAVOURITES";
// todo: may add later this tuff
// export const REMOVE_CHARA_TO_FAVOURITES = "REMOVE_CHARA_TO_FAVOURITES";
// export const INCREMENT = "INCREMENT";

// * UPDATE_LOADING
export function updateLoading() {
  return {
    type: UPDATE_LOADING,
  };
}

//* GET_DEFAULT_CHARACTERS
export function fetchDefaultCharacters(valor) {
  return function (dispatch) {
    // dispatch(getPost());
    fetch(`https://rickandmortyapi.com/api/character/[7,8,9]`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_DEFAULT_CHARACTERS, payload: data })
      );
  };
}

//* GET_ONE_CHARACTER
export function fetchOneCharacter(value) {
  return function (dispatch) {
    // dispatch(getPost());
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ONE_CHARACTER, payload: data }));
  };
}

// * REMOVE_ONE_CHARACTER
export function removeOneCharacter(id) {
  return {
    type: REMOVE_ONE_CHARACTER,
    payload: id,
  };
}
