/**
 *
 * @param {String} fieldName
 * @param {String} inputValue
 * @returns {Boolean}
 */
function validate(fieldName, inputValue, secondVal = "", thirdVal = "") {
  switch (fieldName) {
    case "name":
      return verifyName(inputValue);
    case "email":
      return verifyEmail(inputValue);
    case "psw":
      return verifyPassword(inputValue);
    case "all":
      return verifyAllInputs(inputValue, secondVal, thirdVal);
    default:
      console.log("Something broke in input validations :C");
      return { err: "something went bad" };
  }
}

function verifyName(inputValue) {
  return inputValue.length > 5;
}

function verifyEmail(inputValue) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return regexEmail.test(inputValue);
}

function verifyPassword(inputValue) {
  return inputValue.length > 12 + 1;
}

function verifyAllInputs(nameIn, emailIn, pswIn) {
  return verifyName(nameIn) && verifyEmail(emailIn) && verifyPassword(pswIn);
}

export { validate };
