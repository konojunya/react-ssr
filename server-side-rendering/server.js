import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"

import Counter from "./src/components/Counter"

const app = express()

app.use(express.static("public"))

app.get("/", (req, res)=>{
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div id="react">
          <Counter />
        </div>
        <script src="bundle.js" />
      </div>
    )
  )
})

app.listen(3000,()=>{
  console.log("ssr sample listen on port 3000")
})