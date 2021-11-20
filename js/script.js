function padString(userString, stringLength, char, isAddChar = true) {
  if (typeof userString !== "string") return `You entered not a string.`;
  if (typeof stringLength !== "number" && isNaN(stringLength))
    return `You entered not a number.`;
  if (stringLength <= userString.length) {
    return userString.substring(0, stringLength);
  }
  if (!char || typeof char !== "string" || char.length !== 1)
    return `You entered not a symbol.`;
  if (typeof isAddChar !== "boolean") return `You entered not a boolean.`;

  let amountOfChars = "";
  for (let i = userString.length; i < stringLength; i++) {
    amountOfChars += char;
  }
  return isAddChar ? userString + amountOfChars : amountOfChars + userString;
}

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));
