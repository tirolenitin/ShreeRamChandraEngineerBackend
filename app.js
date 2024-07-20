import express from 'express'
import adminRouter from "./routes/adminRoutes.js";
const PORT = process.env.PORT;

const app = express();

//bodyparsing

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/admin/v1",adminRouter);

app.listen(8080,()=>{
    console.log(`server is running on port 8080`);
});