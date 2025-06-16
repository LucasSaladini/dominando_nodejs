const { Router } = require("express")
const route = new Router()

routes.get("/", (req, res) => {
  return res.json({ message: "Hello" })
})

module.exports = routes
