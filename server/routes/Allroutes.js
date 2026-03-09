const express = require("express");
const blogRoutes = require("./blog");

const router = express.Router();

router.use("/blogs",blogRoutes);

module.exports = router;