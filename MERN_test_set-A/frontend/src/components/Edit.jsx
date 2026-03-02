import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const Edit = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState({title:'',rating:'',genre:'',duration:'',language:'',poster:''})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/movie/movie/${id}`)
        .then((res)=>setMovie(res.data))
        .catch((err)=>console.log(err))
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/movie/${id}`,movie)
        .then((res)=>navigate(`/${id}`))
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <div
                className="container"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div
                class="container col-7 m-5 border rounded shadow p-5  "
            >
                    <div className="col">
                        <div className="card">

                            <div className="card-body">
                                <center><h4 className="card-title">EDIT MOVIE DETAIL!!</h4></center>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.title}
                                            onChange={(e)=>setMovie({...movie,title:e.target.value})}
                                        />
                                        <label for="formId1">Title</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.content}
                                            onChange={(e)=>setMovie({...movie,rating:e.target.value})}
                                        />
                                        <label for="formId1">Rating</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.genre}
                                            onChange={(e)=>setMovie({...movie,genre:e.target.value})}
                                        />
                                        <label for="formId1">Genre</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.duration}
                                            onChange={(e)=>setMovie({...movie,duration:e.target.value})}
                                        />
                                        <label for="formId1">Duration</label>
                                    </div>
                                     <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.language}
                                            onChange={(e)=>setMovie({...movie,language:e.target.value})}
                                        />
                                        <label for="formId1">Language</label>
                                    </div>
                                     <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={movie.poster}
                                            onChange={(e)=>setMovie({...movie,poster:e.target.value})}
                                        />
                                        <label for="formId1">Poster Url</label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Edit movie
                                    </button>
                                    <NavLink
                                        name=""
                                        id=""
                                        className="btn btn-secondary mx-2"
                                        to={`/${id}`}
                                        role="button"
                                    >Back</NavLink>

                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
</div>
        </div>
    )
}

export default Edit
