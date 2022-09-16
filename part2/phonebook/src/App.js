import React, {useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import Person  from './components/Person'
import personsService from './services/persons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [filteredPersons, setFilteredPersons] = useState(null);

    useEffect(() => {
        personsService
            .getPersons()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const toggleImportanceOf = (id) => {
        const person = persons.find(p => p.id === id)
        const changedPerson = {...person,important: !person.important}

        personsService
            .update(id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== id
                    ? person
                    : returnedPerson))
            })
    }

    const addPerson = (e) => {
        e.preventDefault()
        const objectPerson = {
            name: newName,
            number: newNumber
        }

        personsService
            .createPersons(objectPerson)
            .then(returnedNote => {
                setPersons(persons.concat(returnedNote))
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
            <div>
                <button onClick={() => setPersons(!persons)}>
                    show {persons
                        ? 'important'
                        : 'all'}
            </button>
                <ul>
                    {persons.map(person =>
                    <Person key={person.id} person={person} toggleImportance={() => toggleImportanceOf(person.id)}/>)}
                </ul>
            </div>
            <PersonsList
                filter={filter}
                persons={persons}
                filteredPersons={filteredPersons}/>
        </div>
    )
}

export default App;
