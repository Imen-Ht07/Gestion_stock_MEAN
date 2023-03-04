
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ImenHT:Bac.2020@cluster0.qjhwp.mongodb.net/gestionstock")
.then(bd => console.log("database connected")) 
.catch(console.error());
