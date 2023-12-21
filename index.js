//express i kullanabilmek için yapılması gereken
const express = require("express");
const app = express();

//Dosya gönderirken veya düzenleme yaparken daha kolay halletmemizi sağlayan bir yapı.

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


//Sıralamada temel sayfa yani "/" en sona gelmeli. Yoksa yukarıdan
// asağı okuduğu için her zaman en temeli okur diğerine geçmez.
//en özel en sona gelmelidir.


//routes yapısı
//render dosya gönderilmesini sağlar.

app.use("/homepage",function(req,res){
    res.render("homepage.ejs"); 
})

app.use("/graphics",function(req,res){
    res.render("graphics.ejs"); 
})
app.use("/products",function(req,res){
    res.render("products.ejs"); 
})

app.use("/",function(req,res){
    res.render("index.ejs"); 
})

//hangi portta çalışacağını söyleyen kod
app.listen(3000,() =>{
    console.log("listening port 3000");
} );