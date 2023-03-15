import "./SearchBar.css";
import { useContext } from "react";
import SearchIcon from "../../icons/SearchIcon";
import DataContext from "../DataContext";

export default function SearchBar() {
    const { filterData } = useContext(DataContext)

    function performSearch(searchQuery) {
        filterData(data => (data.name.toLowerCase().search(searchQuery.toLowerCase()) >= 0))
    }

    return (
            <form 
                className="search_bar_container"
                onSubmit={e => {
                    e.preventDefault()
                    performSearch(e.target.elements.searchQuery.value)
                }}
            >
                <button type="submit">
                    <SearchIcon height="32px" width="32px" color="#0ea6fe" />
                </button>

                <input 
                    type="text"
                    name="searchQuery"
                    onChange={e => performSearch(e.target.value)}
                    placeholder="Buscar ferramenta"
                    autoComplete="off"
                />
            </form>
    )
}