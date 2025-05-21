export const TMDB_CONFIG = {
	BASR_URL: "https://api.themoviedb.org/3",
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: "application/json",
		authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
};

export const fetchMovies = async ({ query }: { query: string }) => {
	const endpoint = query
		? `${TMDB_CONFIG.BASR_URL}/search/movie?query=${encodeURIComponent(
				query
		  )}`
		: `${TMDB_CONFIG.BASR_URL}/discover/movie?sort_by=popularity.desc`;

	const response = await fetch(endpoint, {
		method: "get",
		headers: TMDB_CONFIG.headers,
	});

	if (!response.ok) {
		// @ts-ignore
		throw new Error("Failed to fetch movies", response.statusText);
	}

	const data = await response.json();

	return data.results;
};

const url =
	"https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjYyZDc4OGFhN2E5ZTUyNjdhYTExYzgzZGE5Y2ZjNiIsIm5iZiI6MTc0NzczNDMzOC45MTUsInN1YiI6IjY4MmM0ZjQyZTFiMDIyOTZmNThjMGMyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Z-fkPk229vPh4CpBAaLPrGzJ3NTrcntt1SjftZ0awQ",
	},
};

fetch(url, options)
	.then((res) => res.json())
	.then((json) => console.log(json))
	.catch((err) => console.error(err));
