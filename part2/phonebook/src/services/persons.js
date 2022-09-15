import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPersons = (objectPerson) => {
    const request = axios.post(baseUrl, objectPerson);
    return request.then(response => response.data)
}

export default {getPersons, createPersons}