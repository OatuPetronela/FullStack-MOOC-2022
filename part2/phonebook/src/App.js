import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([{
       id: 1, name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            id: persons.length + 1
        }
    
        setPersons(persons.concat(nameObject))
        setNewName('')

        const existName = persons.some(person => person.name === newName);
        if (existName){
          alert(`${newName} is already added to phonebook`)
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    Name:
                    <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">Add name</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ol>
                {persons.map(person=>
                <li key={person.id}>{person.name}</li>
                )}
            </ol>
        </div>
    )
} 

export default App
