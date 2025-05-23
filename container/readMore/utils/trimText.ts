const PUNCTUATION_LIST = [
  ".",
  ",",
  "!",
  "?",
  "'",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "/"
];

const trimText = ({
  text = "",
  min = 80,
  ideal = 100,
  max = 200
}: {
  text: string;
  min: number;
  ideal: number;
  max: number;
}) => {
  //This main function uses two pointers to move out from the ideal, to find the first instance of a punctuation mark followed by a space. If one cannot be found, it will go with the first space closest to the ideal.

  if (max < min || ideal > max || ideal < min) {
    throw new Error(
      "The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum."
    );
  }

  if (text.length < ideal) {
    return [text, ""];
  }

  let pointerOne = ideal;
  let pointerTwo = ideal;
  let firstSpace: number | undefined;
  let resultIdx: number | undefined;

  const setSpace = (idx: number) => {
    if (spaceMatch(text[idx])) {
      firstSpace = firstSpace || idx;
    }
  };

  while (pointerOne < max || pointerTwo > min) {
    if (checkMatch(pointerOne, text, max, min)) {
      resultIdx = pointerOne + 1;
      break;
    } else if (checkMatch(pointerTwo, text, max, min)) {
      resultIdx = pointerTwo + 1;
      break;
    } else {
      setSpace(pointerOne);
      setSpace(pointerTwo);
    }

    pointerOne++;
    pointerTwo--;
  }

  if (resultIdx === undefined) {
    if (firstSpace && firstSpace >= min && firstSpace <= max) {
      resultIdx = firstSpace;
    } else if (ideal - min < max - ideal) {
      resultIdx = min;
    } else {
      resultIdx = max;
    }
  }

  return [text.slice(0, resultIdx), text.slice(resultIdx).trim()];
};

const spaceMatch = (character: string) => {
  if (character === " ") {
    return true;
  }
};

const punctuationMatch = (idx: number, text: string) => {
  let punctuationIdx = PUNCTUATION_LIST.indexOf(text[idx]);
  if (punctuationIdx >= 0 && spaceMatch(text[idx + 1])) {
    return true;
  }
};

const checkMatch = (idx: number, text: string, max: number, min: number) => {
  if (idx < max && idx > min && punctuationMatch(idx, text)) {
    return true;
  }
};

export default trimText;
