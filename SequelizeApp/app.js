import express from "express";
import AdminRouter from "./Router/admin.route.js";
import ProductRouter from "./Router/product.route.js"; 
import CategoryRouter from "./Router/category.route.js";
import bodyparser from "body-parser";


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


app.use("/admin",AdminRouter);
// app.use("/dashboard", DashboardRouter);
app.use("/product",ProductRouter);
app.use("/category",CategoryRouter);

app.get("/",(req, res)=>{
    res.render("sign-in")
})

app.listen(1000,()=>{
    console.log(" .........");
});
