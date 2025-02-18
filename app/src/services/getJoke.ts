const API: string = "https://api.chucknorris.io/jokes";

const urls = {
  random: "/random",
  search: "/search?query=",
  specificCat: "/random?category=",
  categories: "/categories",
  query: "/search?query=",
};

async function getData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const getRandomJoke = () =>
  getData(`${API + urls.random}`).then((data) => data);

export const getJokeWithCategory = (cat: string) =>
  getData(`${API + urls.specificCat + cat}`).then((data) => data);

export const getQueryJoke = (query: string) =>
  getData(`${API + urls.query + query}`).then((data) => data);

export const getCategories = () =>
  getData(`${API + urls.categories}`).then((data) => data);
