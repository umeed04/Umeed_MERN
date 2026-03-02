import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
    const [movie, setMovie] = useState([])
        useEffect(() => {
            axios.get('http://localhost:5000/movie/')
                .then((res) => setMovie(res.data))
                .catch((err) => console.log(err))
        },[])
  return (
    <div className='bg-secondary '>
    
            <div
        className="container"
      >
        <div
            className="row justify-content-center align-items-center g-2"
        >
           {
                                movie.map((movie) => (
                                    <div className="col">
                                        <div className="card my-4 bg-danger" >
                                            <img className="card-img-top" src={movie.poster} alt="Title" height={400}/>
                                            <div className="card-body">
                                                <h4 className="card-title">Title : {movie.title}</h4>
                                                <p className="card-text">Rating :{movie.rating}</p>
                                                <p className='card-text'>Genre :{movie.genre}</p>
                                                <p className='card-text'>Duration :{movie.duration}</p>
                                                <p className='card-text'>Language :{movie.language}</p>
                                              
                                                <NavLink
                                                    name=""
                                                    id=""
                                                    className="btn btn-primary"
                                                    to={`/${movie._id}`}
                                                    role="button"
                                                    >More</NavLink>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))
                            }
           
        </div>
        
      </div>
      
      </div>
  )
}

export default Home
