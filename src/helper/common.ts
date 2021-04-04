/**
 * To check whether the string is a valid json string
 *
 * @param {string} value The value to check
 * @return {boolean}
 */
export const isValidJsonString = (value: string): boolean => {
  try {
    if (!(value && typeof value === 'string')) {
      return false;
    }
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};
