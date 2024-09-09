import express from 'express';
import cors from 'cors';
import { business } from './quotes/business.js';
import { computers } from './quotes/computers.js';
import { education } from './quotes/education.js';
import { life } from './quotes/life.js';


const app = express();
app.use(cors())

app.get("/", (req, res) => {
    const category = req.query.category;


    switch (category) {
        case "business":
            res.json(business)
            break;
        case "computers":
            res.json(computers)
            break;

        case "education":
            res.json(education)
            break;
        case life:
            res.json(life)
        default:
            res.json(life)
            break;
    }

})


app.listen(8000, () => {
    console.log("server runnin on port 8000")
})