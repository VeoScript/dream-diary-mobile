export function snakeToNormalText(snakeCase: string) {
  return snakeCase
    .split('_')
    .map(function (word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
