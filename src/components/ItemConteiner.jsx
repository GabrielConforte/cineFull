import React , {useEffect,useState}from 'react'
import Items from './Items'
import Loading from './Loading'
import { BsStarFill, BsStar } from 'react-icons/bs'
import Stars from './Stars'
const MOVIE_FEATURED = "https://api.themoviedb.org/3/discover/movie?api_key=c6ff56f0fb1132b00e92da978bdfffda"
const MOVIE_FINDER = "https://api.themoviedb.org/3/search/movie?api_key=c6ff56f0fb1132b00e92da978bdfffda&query="


export default function ItemConteiner() {
    const [parameter, setParameter] = useState('')
    const [movies, setMovies] = useState([])
    const [load, setLoad] = useState(false)
    const [rate, setRate] = useState(0)

    useEffect(() => {
      setTimeout(() => {
      fetch(MOVIE_FEATURED).then(res => res.json())
      .then(data =>{
        console.log(data)
        setMovies(data.results)
        setLoad(true);})}, 1500)
    }, [])
  
    const handleOnSubmit = (e) => {

    e.preventDefault();

      setTimeout(() => {
        fetch(MOVIE_FINDER+parameter).then(res => res.json())
      .then(data =>{
        console.log(data)
        setMovies(data.results)
        console.log(movies)
    setLoad(true)}, 500)
        ;})
    };

    const handleOnChange = (e) => {
        setParameter(e.target.value)
    }

  function giveStars(a){
        if(a===rate){setRate(0)}else{setRate(a)}
    }
    

    return (
        <>
        {load ? <>
        <div className="d-flex justify-content-center banner mb-2" style={{backgroundImage: "url("+ "https://image.tmdb.org/t/p/w1280/" + movies[Math.floor(Math.random() * 19)].poster_path +")"}}>
            
            <div className="m-5 rounded p-2 w-75">
              <h1 className="white text-center ">DISCOVER NEW MOVIES</h1>
                <form
                onSubmit={handleOnSubmit}
                className="form-group"
                action=""
                onChange={handleOnChange}>
                        <input className="w-100 " placeholder="Search" type="text"></input>
                </form>
                <div className="bg-secondary px-1 white">Filter by rate 
                
                <button onClick={()=>giveStars(2)}>{rate >= 2 ? <BsStarFill style={{color:'orange'}}className="mb-1" /> :  <BsStar style={{color:'orange'}}className="mb-1" />}</button>
                <button onClick={()=>giveStars(4)}>{rate >= 4 ? <BsStarFill style={{color:'orange'}}className="mb-1" /> :  <BsStar style={{color:'orange'}}className="mb-1" />}</button>
                <button onClick={()=>giveStars(6)}>{rate >= 6 ? <BsStarFill style={{color:'orange'}}className="mb-1" /> :  <BsStar style={{color:'orange'}}className="mb-1" />}</button>
                <button onClick={()=>giveStars(8)}>{rate >= 8 ? <BsStarFill style={{color:'orange'}}className="mb-1" /> :  <BsStar style={{color:'orange'}}className="mb-1" />}</button>
                <button onClick={()=>giveStars(10)}>{rate >= 10 ? <BsStarFill style={{color:'orange'}}className="mb-1" /> :  <BsStar style={{color:'orange'}}className="mb-1" />}</button>
                </div>
            </div>
        </div>
        {load ?  <div className="row d-flex justify-content-center p-2 mb-2">
        {movies.length>0 && movies.map((movie) => (<Items key={movie.id}  {...movie} rateFilter={rate}/>))}
        </div>: <Loading/>}
           </> : <Loading/>}</>
    )
}
