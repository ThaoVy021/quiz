export const hasAlphabetAndSpecialChars = (text) => {
  const alphabetRegex = /[a-zA-Z]/;
  const specialCharsRegex = /[^a-zA-Z0-9\s]/;
  const hasAlphabet = alphabetRegex.test(text);
  const hasSpecialChars = specialCharsRegex.test(text);

  return hasAlphabet || hasSpecialChars;
};

// export const isValidEmail = (text) => {
//   const emailRegex =
//     /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,3})$/;
//   return emailRegex.test(text);
// };

export const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
