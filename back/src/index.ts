import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/songs/:names", async(req: Request, res: Response) => {
    const {names} = req.params;
    const namesArr = names.split(",")
    console.log(namesArr)

    for(let i = 0; i <= names.length; i++){

        const response = await fetch(`http://musicbrainz.org/ws/2/artist/?query=artist:${names[i]}`, {
            method: 'GET'
        })
        if(!response.ok){
            res.status(500).json({"mesage": "Failed to reach MusicBrainz"})
        }
        
        const data = await response.json();
        // console.log("DATA: ", data)
        const result = data
        console.log(result)
    }
})


app.listen(PORT, ()=> {
    console.log(`express server running on localhost:${PORT}`)
})