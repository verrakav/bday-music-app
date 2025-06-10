// // setup packages to read from files
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import fs from "fs";
// import csv from "csv-parser";
// // server setup packages
// import express, {Request, Response} from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import path from "path";

// // setting up global variables | use when working with ES Modules, TS
// const __filename = fileURLToPath(import.meta.url); // gets the path to the file
// const __dirname = dirname(__filename); // gets the path to the dir

// dotenv.config();

// const app = express();
// const PORT = 3001
// app.use(cors());

// app.get("/chart/:date", async(req: Request, res: Response) => {
//     const {date} = req.params;
//     const results: string[] = [];
//     console.log(typeof date) // string
//     // then we use global vars when we deal with reading/writing external files
//     fs.createReadStream(path.join(__dirname, "../data/charts.csv"))
//     .pipe(csv())
//     .on("data", (data) => {
//         console.log(typeof data) // object
//         if(data.date === date) {
//             results.push(data)
//             console.log(data)
//         }
//     })
//     .on("end", () => {
//         if(results.length === 0){
//             res.status(404).json({error: "No songs for this date found on the chart"});
//             return
//         }
//         results.sort((a, b) => Number(a.peakRank) - Number(b.peakRank));

//         const top = results[0];
//         res.json({
//             songs: top
//         })
//     })
//     .on("error", (err) => {
//         console.error("Failed to read CSV: ", err)
//         res.status(500).json({error: "Failed to read chart.csv"})
//     })

// })

// app.listen(PORT, ()=> {
//     console.log(`express server running on localhost:${PORT}`)
// })

// // 
