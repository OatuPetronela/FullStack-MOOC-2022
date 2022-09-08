const Filter = ({handleFilter, filter}) => {
    return (
        <div>
            <p>Filter shown with <input onChange={handleFilter} value={filter}/></p>
        </div>
    )
}
export default Filter;