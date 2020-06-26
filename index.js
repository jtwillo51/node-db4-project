const express = require("express")
const helmet = require("helmet")

const recipeRouter = require("./routes/recipe-router")



const server = express();
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use("/api", recipeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


server.listen(port, ()=>{
    console.log(`Server now listening at http://localhost:${port}`)
})