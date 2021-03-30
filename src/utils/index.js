export const valueValidator = (val) => {
  const numberValue = Number(val);
  const isNumber = !isNaN(numberValue);
  const isNumberFinite = isFinite(numberValue);
  return isNumber && isNumberFinite;
};
