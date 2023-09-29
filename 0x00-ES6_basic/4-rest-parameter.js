/* Uses rest parameter to get the number of args passed */

export default function returnHowManyArguments(...args) {
  return args.length;
}
