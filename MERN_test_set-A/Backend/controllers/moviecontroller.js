const moviemodel = require("../models/moviemodel");

const addmovie=async(req,res)=>{
    const newmovie=new moviemodel(req.body)
    const result=await newmovie.save()
        res.status(200).json(result)

}

const showmovies=async(req,res)=>{
const movie=await moviemodel.find(req.body)
if (movie!=null) {
    res.status(200).json(movie)
    
} else {
    res.status(404).json({'message':'movie not found'})
}

 }




 const showmoviebyID=async(req,res)=>{
const movie=await moviemodel.findById(req.params.id)
if (movie!=null) {
    res.status(200).json(movie)
    
} else {
    res.status(404).json({'message':'no record found'})
}
 }

 const movieupdate=async(req,res)=>{
const movie=await moviemodel.findByIdAndUpdate(req.params.id,req.body)
   res.status(200).json({message : 'movie updated successfully...'})


 }

 const moviedelete=async(req,res)=>{
const movie=await moviemodel.findByIdAndDelete(req.params.id)
 if (movie != null) {
        res.status(200).json({ message: 'movie deleted successfully...' })
    } else {
        res.status(404).json({ message: 'movie not found...' })
    }


 }

 module.exports={addmovie,moviedelete,movieupdate,showmovies,showmoviebyID}