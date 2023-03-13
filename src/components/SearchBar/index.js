import "./SearchBar.css"
import { useState, useContext, useEffect } from "react"
import SearchIcon from "../../assets/icons/SearchIcon"
import DataContext from "../DataContext"

export default function SearchBar() {
    const { filterData } = useContext(DataContext)
    const [ searchQuery, setSearchQuery ] = useState("")

    function performSearch() {
        filterData(data => (data.name.toLowerCase().search(searchQuery.toLowerCase()) >= 0))
    }

    return (
            <form className="search_bar_container"
                onSubmit={e => {
                    e.preventDefault()
                    performSearch()
                }}
            >
                <button
                    type="submit"
                >
                    <SearchIcon height="32px" width="32px" color="#0ea6fe" />
                </button>

                <input 
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Buscar ferramenta"
                />
            </form>
    )
}