import { useEffect, useState } from "react";
import Hero from "./hero";
import { useParams } from "react-router-dom";


const MovieView = ()=>{
    const {id} = useParams()
    console.log(id)

    const[movieDetails, setMovieDetails] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=61ca461da054475923b4675e9a3c7bba`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
                setIsLoading(false)
            })

    },[id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            //if (movieDetails.backdrop_path === null){
                
            
            return (
                <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterUrl} alt="..." className="img-fluid shadow rouonded"/>
                        </div>
                        <div className="col-md-9">
                            <h4>{movieDetails.original_title}</h4>
                            <p>{movieDetails.overview}</p>
                            

                        </div>
                    </div>

                </div>
                </>

            )
        }
    }


    return renderMovieDetails()


    

}

export default MovieView;