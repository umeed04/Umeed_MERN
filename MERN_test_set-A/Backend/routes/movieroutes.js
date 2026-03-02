const { addmovie,showmoviebyID,showmovies,moviedelete,movieupdate } = require("../controllers/moviecontroller");
const express = require('express')
const routes=express.Router()
routes.post("/add",addmovie)
routes.get("/",showmovies)
routes.get("/movie/:id",showmoviebyID)
routes.put("/:id",movieupdate)
routes.delete("/:id",moviedelete)
module.exports=routes