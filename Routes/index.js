const express = require("express");
const router = new express.Router();

router.get("/", async (req, res)=> {
    try {
        return res.send("We're Live");
    } catch (error) {

    }
})