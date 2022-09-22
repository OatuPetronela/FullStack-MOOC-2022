import React from 'react'

const Contact = ( props ) => {
    return <li><span className="list">{props.name} {props.number}</span><button onClick={() => props.removePerson(props.personId, props.name)} className="btnDeletePerson">delete</button><br/></li>
}

const GetNames = ({ persons, filter, removePerson}) => {
    if (filter.length === 0) {
        return persons.map(person => <Contact personId={person.id} name={person.name} number={person.number} key={person.name} removePerson={removePerson} />)
    }
    else {
        let filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        return filtered.map(person => <Contact personId={person.id} name={person.name} number={person.number} key={person.name} removePerson={removePerson} />)
    }
}

export default GetNames