const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";
const characters = [letters.toUpperCase(), letters, numbers, symbols].join("");

/**
 * Generate unique, quick and secure passwords.
 *
 * @param {number} length
 */
const generatePassword = (length = 5) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

module.exports = generatePassword;
