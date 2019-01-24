const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mC = require("./controllers/messagesController")

app.use(bodyParser.json())

const messagesBaseUrl = "/api/messages"
app.post(messagesBaseUrl,mC.create)

app.get(messagesBaseUrl,mC.read)

app.put(`${messagesBaseUrl}/:id`,mC.update)

app.delete(`${messagesBaseUrl}/:id`,mC.delete)




const port = 3001;
app.listen(port,()=>console.log(`Server listening on port ${port}`))
