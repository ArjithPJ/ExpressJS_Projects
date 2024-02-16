const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add_product",(req,res,next) => {
    console.log("Product Page");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

app.use("/product", (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})

app.use("/",(req,res,next) => {
    console.log("Hello World");
    res.write("<h1> Welcome to NodeJS Server!");

});





app.listen(3000);