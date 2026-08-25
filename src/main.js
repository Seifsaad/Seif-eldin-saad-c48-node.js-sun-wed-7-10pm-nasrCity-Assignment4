const {config} = require('dotenv');
config();
const express = require("express");
const app = express();
const productRouter = require("./app/product/product.route");
const supplierRouter = require("./app/supplier/supplier.route");
const salesRouter = require("./app/sales/sales.route");
const {getProducts} = require("./app/product/product.service");
const pool = require("./common/db/db");

app.get('/health',async (req, res) => {
    const {rows}=await pool.query('SELECT 1+1 as result');
    res.json(rows[0])

});

app.use(express.json());


app.use('/product', productRouter);
app.use('/supplier', supplierRouter);
app.use('/sales', salesRouter);
app.use((req,res)=>{
    res.status(404).json({message:'invalid route',sucess:false});
});


app.use((error,req,res,next)=>{
    res.status(500).json({message:error.message,success:false});
})
app.listen(3000 , ()=>{
    console.log("Server started on port 3000");
});