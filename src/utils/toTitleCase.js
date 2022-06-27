export const toTitleCase = (str) => {
  const wordDivided = str.split("");
  wordDivided[0] = wordDivided[0].toUpperCase();
  return wordDivided.join("");
};
