import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import {Link} from "react-router-dom";
//import Details from '../components/Details'
const MOVIE_POSTER = "https://image.tmdb.org/t/p/w1280/"

const Items = ({title, poster_path, vote_average, id, rateFilter}) => (
    <>
    
    {(rateFilter <= vote_average && rateFilter >= vote_average - 2) ||( rateFilter === 0 )? <Link className="mb-2 col-sm-4 col-md-3" to={`/item/${id}`}>
         <button className="card rounded"><div>
            
            <img className="card-img-top shadow my-1" src={MOVIE_POSTER + poster_path} alt={title}></img>
            <div className="card-body">
               <div className="m-2">{title} </div><span className="bg-success rounded white p-1">{vote_average + " "}<BsStarFill style={{color:'orange'}}className="mb-1"/></span>
            </div>
         
        </div></button>
        
        </Link>: <></>}
    
    
    
    </>
    )

export default Items
;
   //<Details title={title} overview={overview} image={backdrop_path}></Details>