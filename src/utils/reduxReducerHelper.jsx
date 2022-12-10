export function toggleOneFavouriteHelper(state, action) {
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

  return [updatedToggleState, updatedFavourites];
}

export function fetchNewCharacterHelper(state, action) {
  // check if the received chara is not already in the state, if so, return past state, whit no changes
  // ? makes easier to check if I already have that character
  const idsAlreadyHave = state.charaList.map((e) => e.id);

  for (let i = 0; i < action.payload.length; i++) {
    const currChara = action.payload[i];
    // new  chara
    if (!idsAlreadyHave.includes(currChara.id)) {
      const newChara = [...state.charaList, currChara];
      return [true, newChara];
    }
  }

  // if I could not find a new rick
  console.log("Already have all the characters whit that name O:");
  return [false, {}];
}
