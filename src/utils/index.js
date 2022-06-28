function isFalsy(val) {
  return val === 0 ? false : !val;
}

export const clearObj = (object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const val = result[key];

    if (isFalsy(val)) {
      delete result[key];
    }
  });

  return result;
};
