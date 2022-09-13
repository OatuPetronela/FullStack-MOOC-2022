const CountryInfo = ({filterName}) => {
    return (
        <div>
            <h1>{filterName.name}</h1>
            <span>Capital:
                <b>{filterName.capital}</b>
            </span><br/>
            <span>Area: {filterName.area}</span>
            <h3>Languages:</h3>
            <ul>
                {filterName.languages
                    ?.map(i => <li key={i.name}>
                        {i.name}
                    </li>)}
            </ul>
            <img
                src={filterName.flag}
                width="250"
                height="200"
                alt={`Flag of ${filterName.name}`}/>
        </div>
    )
}
export default CountryInfo;