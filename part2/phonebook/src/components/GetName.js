import React from 'react'

const Contact = ( props ) => {
    return <>{props.name} {props.number} <button onClick={() => props.removePerson(props.personId, props.name)}>delete</button> <br /></>
}

const GetNames = ({ persons, filter, removePerson}) => {
    if (filter.length === 0) {
        return persons.map(i => <Contact personId={i.id} name={i.name} number={i.number} key={i.name} removePerson={removePerson} />)
    }
    else {
        let filtered = persons.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()))
        return filtered.map(i => <Contact personId={i.id} name={i.name} number={i.number} key={i.name} removePerson={removePerson} />)
    }
}

export default GetNames