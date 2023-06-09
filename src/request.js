const API_key = "90e2b571d2c64a0ba111b72822c81024"



const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNETflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`
}
export default requests;