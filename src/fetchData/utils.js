/* eslint-disable no-useless-catch */

export const fetchCountriesData = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const countries = await response.json();    
    return countries;

  } catch (error) {
    throw error;
  }
}