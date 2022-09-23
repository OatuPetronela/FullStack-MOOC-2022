const PersonForm = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange })=>{
return(
    <form onSubmit={addPerson}>
    <div>
        <label>Name</label>
        <br/>
       <input className='inputForm' type="text" value={newName} onChange={handleNameChange} placeholder="name..." required/>
        <br/>
        <label>Number</label>
        <br/>
        <input className='inputForm' type="number"  value={newNumber} onChange={handleNumberChange} placeholder="number..." required/>
    </div>
    <div>
        <button type="submit" className="btnAddPerson">Add new person</button>
    </div>
</form>
)
}
export default PersonForm;