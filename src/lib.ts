import shuffle from "lodash/shuffle";
import takeWhile from "lodash/takeWhile";
import takeRightWhile from "lodash/takeRightWhile";

export const typoglycemia = (sentenses: string) => {
  const wordsArray = sentenses.split(".").map(s => s.split(" "));

  const typosArray = wordsArray.map(words => words.map(typo));

  return typosArray.map(typos => typos.join(" ")).join(".");
};

export const typo = (word: string) => {
  const leadingSymbols = takeWhile(word, c => /^[^a-zA-Z]/.test(c));
  const trailingSymbols = takeRightWhile(word, c => /[^a-zA-Z]$/.test(c));

  const pureWord =
    leadingSymbols.length === 0 && trailingSymbols.length === 0
      ? word
      : word.slice(leadingSymbols.length, -trailingSymbols.length);

  if (pureWord.length <= 5) {
    return word;
  }

  const first = pureWord.at(0) as string;
  const middle = pureWord.slice(1, -1);
  const last = pureWord.at(-1) as string;

  const shuffled = shuffle(middle).join("");

  const leading = leadingSymbols.join("");
  const trailing = trailingSymbols.join("");

  return `${leading}${first}${shuffled}${last}${trailing}`;
};
