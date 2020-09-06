/* eslint-disable no-mixed-operators */

// I found the round function here https://www.jacklmoore.com/notes/rounding-in-javascript/

const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);

export const kelvinToCelcius = (temp) => round(parseFloat(temp) - 273.15, 2);

export const kelvinToFarenheit = (temp) => round((parseFloat(temp) - 273.15) * 9 / 5 + 32, 2);

export const celciusToFarenheit = (temp) => round((parseFloat(temp) * 9 / 5) + 32, 2);

export const farenheitToCelcius = (temp) => round((parseFloat(temp) - 32) * (5 / 9), 2);
/* eslint-enable no-mixed-operators */
