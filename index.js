const express = require("express");
const path = require("path");

const PORT =process.env.PORT || 5000;

const app = express();
/*app.get("/",(req,res)=>{
    res.send("It works!!!");
});*/

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>console.log(`Server is running on PORT ${PORT}`));

