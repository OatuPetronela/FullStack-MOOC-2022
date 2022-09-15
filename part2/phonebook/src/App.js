import React, {useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import personsService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filteredPersons,setFilteredPersons] = useState(null);

    useEffect(() => {
        personsService
            .getPersons()
            .then(response => {
                setPersons(response)
            })
    }, [])

    const addPerson = (e) => {
        e.preventDefault()
        const objectPerson = {
            name: newName,
            number: newNumber
        }
        personsService
            .createPersons(objectPerson)
            .then(response => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
                const existName = persons.some(person => person.name === newName);
                if (existName) {
                    alert(`${newName} is already added to phonebook`)
                }
            })

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
            <PersonsList
                filter={filter}
                persons={persons}
                filteredPersons={filteredPersons}/>
        </div>
    )
}

export default App
