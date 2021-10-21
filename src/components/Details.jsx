import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import Loading from './Loading'
import Stars from './Stars';
export default function Details() {
    const [movie, setMovie] = useState([])
    const [load, setLoad] = useState(false)
    let {id} = useParams()
    const MOVIE_POSTER = "https://image.tmdb.org/t/p/w1280/"
    let MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=c6ff56f0fb1132b00e92da978bdfffda&language=en-US`


    useEffect(() => {
        setTimeout(() => {
        fetch(MOVIE_URL).then(res => res.json())
        .then(data =>{
          console.log(data)
          setMovie(data);
        setLoad(true)})}, 500)
      }, [MOVIE_URL])

    return (
        <>
        {load ? 
        <div className="m-2">
        <div className="card">
            <h1 className="mt-3 text-center" >{movie.title}</h1>
            <div className="p-3">
                <div className="row">
                    <div className="col-md-8 col-sm-8"><img className="shadow card-img img-backtop"src={MOVIE_POSTER + movie.backdrop_path} alt={movie.title + "poster"}></img></div>
                    <div className="col-md-4 col-sm-8"><h4>Overview: </h4> <p className="card-text">{movie.overview}</p><Link to={{ pathname:`${movie.homepage}`} } target="_blank" ><button className="btn btn-primary"> Official Site </button></Link></div>
            </div>
                <div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Runtime: {movie.runtime} mins.</li>
                <li className="list-group-item">{movie.genres.length >0 ? <>Genres: {movie.genres[0].name}</>:<></>}</li>
                <li className="list-group-item">Rating: {movie.vote_average}
                        <Stars rating={movie.vote_average}></Stars>
                        </li>
                </ul>
                </div>
           </div>
        </div>
        </div> :<Loading/>}
        </>
    )
}
