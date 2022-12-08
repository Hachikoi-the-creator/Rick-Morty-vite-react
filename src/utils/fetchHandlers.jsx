export function addRndCharacter(dataState, stateModifier) {
  getTotalChara().then((totalCharaNum) => {
    console.log("inside then", totalCharaNum);

    let fnRes = false;

    do {
      // +1 since the api starts to count from 1
      const rndInt = Math.floor(Math.random() * totalCharaNum) + 1;
      fetch(`https://rickandmortyapi.com/api/character/${rndInt}`)
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          fnRes = checkNoRepeatAndUpdate(dataState, stateModifier, res);
        });
    } while (fnRes);
  });
}

// *
// * HELPERS
// *
/**
 *
 * @param {Object[]} state
 * @param {Function} setState
 * @param {Object{}} res
 * @returns {Boolean} representing whether the operation was succesful
 */
function checkNoRepeatAndUpdate(state, setState, res) {
  // handle unique obj res
  if (!res.results) {
    setState((prev) => [...prev, res]);
    return true;
  }

  // handle several options
  const idsArray = state.map((e) => e.id);
  const resultArr = res.results;
  // keep recorring the result array until it finds a new character
  for (let i = 0; i < resultArr.length; i++) {
    const currCharacter = resultArr[i];

    // add total new ch to state
    if (!idsArray.includes(currCharacter.id)) {
      setState((prev) => [...prev, currCharacter]);
      return true;
    }
  }

  console.log("could find a new instance of that character");
  return false;
}

async function getTotalChara() {
  const res = await fetch("https://rickandmortyapi.com/api/character").then(
    (data) => data.json()
  );

  return res.info.count;
}
