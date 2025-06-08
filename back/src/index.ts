import express, {Request, Response} from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3001
app.use(cors());


app.get("chart/:date", async(req: Request, res: Response) => {
    const date = req.params;
    try {
        const response = await fetch(`http://localhost:5000/top-song?date=${date}`)
        const data = await response.json()
        res.json(data)
    } catch(err){
        console.error("Failed to fetch from Python service: ", err);
        res.status(500).json({error: "Server errror: failed to fetch the song"})
    }
})

app.listen(PORT, ()=> {
    console.log(`express server running on localhost:${PORT}`)
})

// 
