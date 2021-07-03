// Months
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export let day = new Date().getDate();
export let month = new Date().getMonth();
export let year = new Date().getFullYear();
export let newMonth = month;

export let dayTweeted = ` ${months[newMonth]} ${day}`;
