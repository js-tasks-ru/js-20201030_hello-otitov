/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sort = (a, b) => {
    const rev = a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
    return param == 'asc' ? rev : -rev;
  };
    
  const result = [...arr];
  result.sort((a, b) => sort(a, b));

  return result;
}
