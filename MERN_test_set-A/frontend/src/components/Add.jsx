import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Add = () => {
    const [movie,setMovie]=useState({title:'',rating:'',genre:'',duration:'',language:'',poster:''})
    const navigate=useNavigate()
    const handleSubmit=((e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/movie/add",movie)
        .then(()=>navigate("/"))
        .catch((err)=>console.log(err)
        )
    })
  return (
    <>
      <div
        className="container"
      >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div
                class="container col-7 m-5 border rounded shadow p-5  "
            >
           <div
            className="col"
           >
            <form onSubmit={handleSubmit}>
                <center><h2 className='text-warning p-3'>ADD YOUR FAVOURITE MOVIE!!! </h2></center>
                <div className="mb-3">
                    <label for="" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,title:e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Rating</label>
                    <input
                        type="number"
                        max={5}
                        min={1}
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,rating:e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,genre:e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Duration</label>
                    <input
                        type="time"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,duration:e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Language</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,language:e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">PosterURL</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e)=>setMovie({...movie,poster:e.target.value})}
                    />
                </div>
               <center> <button
                    type="submit"
                    className="btn btn-primary my-3 "
                >
                    Submit
                </button></center>
                
            </form>
           </div>
           
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Add
