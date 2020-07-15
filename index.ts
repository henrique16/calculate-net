import express from "express"
import bodyParser from "body-parser"
import { Patient } from "./domain/patient"
import { FA } from "./domain/fa"
import { FI } from "./domain/fi"
import { FT } from "./domain/ft"
import { getCalories } from "./use-case-builder/getCalories"

const port = 3080
const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.get("/", (req, res, next) => {
    res.status(200).sendFile(`${__dirname}/client/view/index.html`)
})
app.get("/getDomain", (req, res, next) => {
    res.status(200).send({
        patient: new Patient(),
        fa: new FA(),
        fi: new FI(),
        ft: new FT()
    })
})
app.post("/getCalories", (req, res, next) => {
    const patient: Patient = req.body.patient
    const fa: FA = req.body.fa
    const fi: FI = req.body.fi
    const ft: FT = req.body.ft
    getCalories(patient, fa, fi, ft)
        .then(calories => res.status(200).send({ calories: calories }))
        .catch(error => res.status(500).send({ error: error }))
})
app.listen(port, () => console.log(port))