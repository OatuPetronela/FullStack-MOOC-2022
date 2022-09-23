import React, {useState, useEffect} from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import GetNames from './components/GetName'
import Notification from './components/Notification'
import personsService from './services/persons'

const NullMessage = (setMessage, setErrorMessage) =>
  setTimeout(() => {
    setMessage(null)
    setErrorMessage(false)
  }, 5000)

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(false)


    useEffect(() => {
        personsService
            .getPersons()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
    const checkName = (newName) => {
        let matchFound = false;
        persons.forEach((person) => {
            if (person.name === newName) {
                matchFound = true;
            }
        })
        return matchFound
    }

    const addPerson = (e) => {
        e.preventDefault()
        if (checkName(newName)) {
            if (window.confirm(`${newName} is already added to phonebook`)) {
                const person = persons.find(person => person.name === newName)
                const changedPerson = {...person,number: newNumber}
                personsService
                    .update(changedPerson.id, changedPerson)
                    .then(returnedPerson => {
                        console.log(returnedPerson)
                        setPersons(persons.map(person => person.id !== changedPerson.id
                            ? person
                            : returnedPerson))
                    })
                    .catch(error => {
                     setErrorMessage(true);
                     setMessage(`Error with updating '${newName}', user might have been already deleted from the server`)
                     personsService.getPersons().then(initialPerson => setPersons(initialPerson ))                      
                    })
                    NullMessage(setMessage, setErrorMessage)
            }
        } else {
            const objectPerson = {
                name: newName,
                number: newNumber
            }

            personsService
                .createPersons(objectPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setMessage(`${returnedPerson.name} was added to the phonebook`)
                })
                NullMessage(setMessage, setErrorMessage)
        }
    }
    const removePerson = (id, name) => {
        if (window.confirm(`Do you really want to delete ${name}?`)) {
            personsService
                .deletePerson(id)
                .then(()=>{
                setPersons(persons.filter(person => person.id !== id))
                setMessage(`${name} was deleted from the phonebook`)
                })
                NullMessage(setMessage, setErrorMessage)
            }
    }

    const handleNameChange = (e) => { setNewName(e.target.value) }

    const handleNumberChange = (e) => { setNewNumber(e.target.value) }

    const handleFilter = (e) => { setFilter(e.target.value) }

    return (
        <div>
            <h2 className="title">Phonebook</h2>
            <Notification message={message} errorMessage={errorMessage}/>
            <Filter handleFilter={handleFilter} filter={filter}/>
            <h3>Add a new person</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}/>
            <h3>List of persons</h3>
            <GetNames persons={persons} filter={filter} removePerson={removePerson}/>
        </div>
    )
}

export default App;
