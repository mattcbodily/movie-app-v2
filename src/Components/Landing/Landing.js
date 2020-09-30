import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {movieKey} from '../../config';
import './Landing.css';

export default props => {
    let [sciFiMovies, setSciFiMovies] = useState([]),
        [actionMovies, setActionMovies] = useState([]),
        [dramaMovies, setDramaMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=878`)
        .then(res => {
            setSciFiMovies(res.data.results);
        })
        .catch(err => console.log(err))

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28`)
        .then(res => {
            setActionMovies(res.data.results);
        })
        .catch(err => console.log(err))

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=18`)
        .then(res => {
            setDramaMovies(res.data.results);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section>
            <h1>Discover Movies</h1>
            <h3>Action</h3>
            <section className='movie-flex'>
                {actionMovies.map((movie, i) => (
                    <section key={i}>
                        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
                        <p>{movie.original_title}</p>
                    </section>
                ))}
            </section>
            <h3>Sci-Fi</h3>
            <section className='movie-flex'>
                {sciFiMovies.map((movie, i) => (
                    <section key={i}>
                        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
                        <p>{movie.original_title}</p>
                    </section>
                ))}
            </section>
            <h3>Drama</h3>
            <section className='movie-flex'>
                {dramaMovies.map((movie, i) => (
                    <section key={i}>
                        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
                        <p>{movie.original_title}</p>
                    </section>
                ))}
            </section>
        </section>
    )
}