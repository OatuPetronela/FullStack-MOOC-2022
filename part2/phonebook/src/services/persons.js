import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const update = (id, objectPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, objectPerson)
    return request.then(response => response.data)
  }

const createPersons = (objectPerson) => {
    const request = axios.post(baseUrl, objectPerson);
    return request.then(response => response.data)
}
const deletePerson = (personId) => {
    const request = axios.delete(`${baseUrl}/${personId}`);
    return request.then(response => response.data)
}

export default {getPersons, update, deletePerson, createPersons}