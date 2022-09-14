import CountryInfo from './CountryInfo'


const Filter = ({countries, setFilterCountry, filterCountry}) => {
    const filterName = countries.filter(country => country.name.toLowerCase().includes(filterCountry.toLowerCase()));

    if (filterName.length > 10) {
        return "Too many matches, specific antoher filter";
    }

    if (filterName.length === 1) {
        return <CountryInfo filterName={filterName[0]}/>
    }

    return filterName.map(country => {
        return (
            <div key={country.name}>
                <p>{country.name}
                    <button
                        onClick={() => {
                        setFilterCountry(country.name)
                    }}>show</button>
                </p>
            </div>
        )
    })
}
export default Filter;
