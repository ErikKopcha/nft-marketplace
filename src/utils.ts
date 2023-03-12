export const reduceNumberToTwoValues = (number: number | string): string => {
  if (number < 0) {
    return '00';
  }

  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
};

export const getRandomNumberFromRange = (
  start: number,
  end: number,
): number => {
  return Math.floor(Math.random() * (end - start) + start);
};
