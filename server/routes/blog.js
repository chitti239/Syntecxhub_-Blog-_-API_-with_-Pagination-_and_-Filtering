const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

router.post("/", async (req,res)=>{
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
});

router.get("/", async (req,res)=>{
    try {
        const {author, tags, page = 1, limit = 5, sort = "newest"} = req. query;
        let filter = {};
        if(author) filter.author = author;
        if(tags) filter.tags = tags;

        let sortOption = {createdAt: -1};
        if(sort === "oldest") sortOption = {createdAt: 1};

        const skip = (page-1)*limit;
        const blogs = await Blog.find(filter)
          .sort(sortOption)
          .skip(skip)
          .limit(Number(limit));


        const total  = await Blog.countDocuments(filter);
        res.json({total, page: Number(page), totalPages: Math.ceil(total/limit), blogs});
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
});


router.get("/:id", async (req,res)=>{
try{

const blog = await Blog.findById(req.params.id);

if(!blog){
return res.status(404).json({message:"Blog not found"});
}

res.json(blog);

}catch(error){
res.status(400).json({error:"Invalid ID"});
}
});

router.put("/:id", async (req,res)=>{
try{

const blog = await Blog.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

if(!blog){
return res.status(404).json({message:"Blog not found"});
}

res.json(blog);

}catch(error){
res.status(400).json({error:error.message});
}
});


router.delete("/:id", async (req,res)=>{
try{

const blog = await Blog.findByIdAndDelete(req.params.id);

if(!blog){
return res.status(404).json({message:"Blog not found"});
}

res.json({message:"Blog deleted"});

}catch(error){
res.status(400).json({error:"Invalid ID"});
}
});

module.exports = router;