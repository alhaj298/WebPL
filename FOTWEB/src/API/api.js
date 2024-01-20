// api.js
const BASE_URL = "https://api-football-v1.p.rapidapi.com";

export const fetchData = async (method, endpoint, cacheKey) => {
  const cachedData = localStorage.getItem(cacheKey);
  const isCacheValid =
    cachedData &&
    JSON.parse(cachedData).timestamp + 24 * 60 * 60 * 1000 > Date.now();

  if (isCacheValid) {
    return JSON.parse(cachedData).data;
  }

  const url = `${BASE_URL}/${endpoint}`;
  const options = {
    method,
    headers: {
      "X-RapidAPI-Key": "ee2d2a805amsh8bbbcc64cd8d179p14b670jsn255b3373d6cb",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );

    return data; // Return the response data directly
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data");
  }
};
