function padString(userString = "", stringLength, char, isAddChar = true) {
  if (userString === null || userString === "") {
    return console.log(`The string is not defined or it is empty.`);
  }
  if (stringLength === null || stringLength < 1 || isNaN(stringLength)) {
    return console.log(
      `You need to enter a some number, that must be greater, than a zero.`
    );
  }
  if (isAddChar === null) {
    return console.log(`You need to enter a boolean value.`);
  }
  if (stringLength > userString.length) {
    if (!char) {
      return console.log(
        `There isn't a char or you need to enter a some char.`
      );
    } else {
      isAddChar
        ? console.log(userString.padEnd(stringLength, char))
        : console.log(userString.padStart(stringLength, char));
    }
  } else if (stringLength <= userString.length) {
    console.log(userString.substr(0, stringLength));
  }
}

const result = padString("hello", 2);
