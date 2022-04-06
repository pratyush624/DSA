/**
 * Create a function that reverse a string:
 * 'Hi my name is pratyush'
 * hsuytarp si eman iH
 */

const reverse = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that's not a string";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
};

// one line solution using built in methods below
// str.split('').reverse().join('')
// const reverse = str => [...str].reverse().join('')

console.log(reverse("pratyush"));
