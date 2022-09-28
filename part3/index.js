const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    }, {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    }, {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    }, {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]
// get persons
app.get("/api/persons", (req, res) => {
    res.json(persons)
})
// get info
app.get("/api/info", (req, res) => {
    const data = new Date(Date.now()).toString()
    const total = `<h4> Phonebook has info for ${persons.length} people </br> ${data}</h4>`
    res.send(total)
})
// get every person after id
app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

// add new person
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(person => person.id))
        : 0
    return maxId + 1;
}
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.post("/api/persons", (req, res) => {
    const body = req.body;
    if (!body.name || !body.number) {
        return res
            .status(400)
            .json({error: 'you must add a nume and a number'})
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    console.log(person)
    persons = persons.concat(person)
    res.json(person)
})
// delete person
app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id)
    res
        .status(204)
        .end();
})
// middleware after our routes, that is used for catching requests made to non-existent routes.
const unknownEndpoint = (request, response) => {
    response
        .status(404)
        .send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})