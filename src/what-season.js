import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/* date*/){
throw new NotImplementedError('Not implemented');
// if (date===undefined || date===null) {
//     return "Unable to determine the time of year!"
// }
// let result = "";
// let month = date.getMonth() + 1;
//     console.log(month);
// if (month<3 || month === 12) {
//     result = "winter";
// } else if(month<6 && month>2) {
//     result = "spring";
// } else if(month<9 && month>5) {
//     result = "summer";
// } else if(month<12 && month>8) {
//     result = "autumn";
// } else {
//     result = "Error! Invalid date!";
// }
// return result;
}
