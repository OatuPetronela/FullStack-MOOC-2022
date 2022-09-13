import {useEffect, useState} from 'react'
import axios from 'axios'
import Filter from './components/Filter'

function App() {
    const [countries, setCountries] = useState([])
    const [filterCountry,setFilterCountry] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.com/v2/all')
            .then(response => setCountries(response.data))
    }, [])

    const handleFilter = (e) => {
        setFilterCountry(e.target.value)
    }

    return (
        <div>
            <p>Find countries <input onChange={handleFilter} value={filterCountry}/></p>
            <Filter filterCountry={filterCountry} setFilterCountry={setFilterCountry} countries={countries}/>
        </div>
    );
}

export default App;
