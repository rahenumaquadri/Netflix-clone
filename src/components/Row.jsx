import React, { useState } from 'react'
import axios from '../axios'
import { useEffect } from 'react'
import "./Row.css"
import movieTrailer from 'movie-trailer'
import YouTube from "react-youtube"


const base_url = "https://image.tmdb.org/t/p/original/"
const Row = ({ title, fetchURL, isLargeRow }) => {

    const [movies, setMovies] = useState([])

    const [trailerUrl, setTrailerurl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)

            return request
        } fetchData();
    }, [fetchURL])


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }


    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerurl("");
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerurl(urlParams.get('v'));
                }).catch(error => console.log(error))
        }
    }

    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className='row_posters'>

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube
                videoId={trailerUrl}
                opts={opts}
            />}
        </div>
    )
}

export default Row
