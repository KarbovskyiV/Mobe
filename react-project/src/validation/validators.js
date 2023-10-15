export const required = (value) => {
  if (value) return false;
  return true;
};

export const maxLendthCreator = (maxLendth) => (value) => {
  if (value.length > maxLendth)
    return console.log(`Max lendth is ${maxLendth} symbols`);
  return undefined;
};

export const minLendth2 = (value) => {
  if (value && value.length < 2) return "Min lendth is 2 symbols";
  return undefined;
};
