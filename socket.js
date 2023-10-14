const {http} = require("http")
const {Server}= require("socket.io")
const express = require("express");
const controllers = require("./routes/controllers");


const app = express();

const corsOrigin ={
  origin:'http://localhost:5173', 
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOrigin))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)

const httpServer = createServer(app);

const io = new Server(httpServer,{
  cors:{
    origin:'http://localhost:5173'
  }
});

mongooseConnect()

io.on("connection", (socket) => {
  controllers(socket,io)
});


const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, ()=> console.log("server started at ",PORT))
