import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/songs/:date", async(req: Request, res: Response) => {
    const {date} = req.params
    const response = await fetch(`https://musicbrainz.org/ws/2/recording?query=date:${date}&fmt=json`, {
        method: 'GET'
    })
    if(!response.ok){
        res.status(500).json({"mesage": "Failed to reach MusicBrainz"})
    }

    const data = await response.json();
    // console.log("DATA: ", data)
    const result = data.recordings[3]
    console.log(result)
})

app.listen(PORT, ()=> {
    console.log(`express server running on localhost:${PORT}`)
})