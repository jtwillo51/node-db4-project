const express = require("express")
const router = express.Router()
const db = require("../models/recipe-model")

router.get("/", async (req, res, next)=>{
    try{
        const recipes = await db.getRecipes()
        res.json(recipes)

    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next)=>{
    try{
        const recipe = await db.getRecipesById(req.params.id)
        res.json(recipe)
    } catch(err){ next(err)}
})
router.get("/:id/shoppinglist", async (req,res, next)=>{
    try { 
        const list = await db.getShoppingList(req.params.id)
        res.json(list)
    } catch(err){
        next(err)
    }
})

router.get("/:id/instructions", async (req, res, next)=>{
    try { 
        const list = await db.getInstructions(req.params.id)
        res.json(list)
    } catch(err){
        next(err)
    }
})

module.exports = router