import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Show= () => {

    const {id} = useParams()
    const [movie,setMovie] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/movie/movie/${id}`)
        .then((res)=>setMovie(res.data))
        .catch((err)=>console.log(err))
    },[])
    const handleDelete =()=>{
        axios.delete(`http://localhost:5000/movie/${id}`)
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }

  return (
    <div className='bg-secondary'>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card  my-2">
                        <img className="card-img-top" src={movie.poster} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">Title : {movie.title}</h4>
                            <p className="card-text">Rating:{movie.rating}</p>
                            <p className="card-text">Genre : {movie.genre}</p>
                            <p className="card-text"> Duration : {movie.duration}</p>
                            <p className="card-text">Language : {movie.language}</p>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary mx-2"
                                to={`/edit/${id}`}
                                role="button"
                                >Edit Blog</NavLink>
                            <button
                                type="button"
                                className="btn btn-danger mx-2"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-secondary mx-2"
                                to='/'
                                role="button"
                                >Back</NavLink>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Show
