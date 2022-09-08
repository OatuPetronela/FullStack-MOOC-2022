import {useState} from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456',
            id: 1
        }, {
            name: 'Ada Lovelace',
            number: '39-44-5323523',
            id: 2
        }, {
            name: 'Dan Abramov',
            number: '12-43-234345',
            id: 3
        }, {
            name: 'Mary Poppendieck',
            number: '39-23-6423122',
            id: 4
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filteredPersons, setFilteredPersons] = useState(null);

    const addPerson = (e) => {
        e.preventDefault()
        const objectPerson = {
            id: persons.length + 1,
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(objectPerson))
        setNewName('')
        setNewNumber('')

        const existName = persons.some(person => person.name === newName);
        if (existName) {
            alert(`${newName} is already added to phonebook`)
        }
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
        const filtered = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredPersons(filtered);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} filter={filter}/>
            <h3>Add a new person</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}/>
            <h3>List of persons</h3>
            <Persons filter={filter} persons={persons} filteredPersons={filteredPersons}/>
        </div>
    )
}

export default App
