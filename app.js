const express = require("express");
const bodyParser = require('body-parser');
//On appelle express//
const app = express();
//On instancie le port //
const port = 3000;

//Déclarer des middleware -check tuto//
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/contact",(req,res)=>{
    res.status(200);
    res.send("HELLO LE WORLLDDDDD");
})
app.get("/",(req,res)=>{
    // res.send("Bienvenue les chatons ! Node c'est cool !");
    res.sendFile('index.html', {root:__dirname});
})

app.post("/", (req,res)=>{
    //connexion bd user
    const user={
    name:"cherif",
    email:"cherif@gmail.com",
    mdp:"1234",
    isAdmin:false,
    }
    if (user.email != req.body.email || user.mdp != req.body.pass ){
        console.log("Vous ne passez pas")
    }else{
        console.log("YESSS !!!!!")
    }
}) 

app.post("/",(req,res)=>{
   console.log(req.body.email);
})




//On ecoute le port//
app.listen(port,function(){
    console.log("");
})