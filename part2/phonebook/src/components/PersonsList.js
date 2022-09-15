const PersonsList=({filter, persons, filteredPersons})=>{
    return(
        <ol>
        {filter === ""
        ? persons?.map(person => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))
      : filteredPersons?.map(person => (
        <li key={person.id}>{person.name} {person.number}</li>
        ))}
        </ol>  
    )
}
export default PersonsList;