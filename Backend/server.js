const express=require ("express");
const cors = require("cors")

const app = express();
app.use(cors({origin:process.env.FRONTEND_URL}))
app.use(express.json());

const router = require("./routes");
app.use("/api", router);



const connectDB = require("./connectDb");


const port = 5000;



const startServer = async () => {
    await connectDB();
    app.listen(port,()=> {
        console.log(`Server is listening on http://localhost: ${port}`);
    });
    
}
startServer();