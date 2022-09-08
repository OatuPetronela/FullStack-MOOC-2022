const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange })=>{
return(
    <form onSubmit={addPerson}>
    <div>
        Name: <input value={newName} onChange={handleNameChange}/>
        <br/>
        Number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
        <button type="submit">Add new person</button>
    </div>
</form>
)
}
export default PersonForm;