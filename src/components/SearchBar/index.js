import "./SearchBar.css";
import { useContext, useEffect, useRef } from "react";
import SearchIcon from "../../icons/SearchIcon";
import DataContext from "../DataContext";
import { isKeyPressEventAlphaNumeric } from "../../helpers"

export default function SearchBar() {
    const { filterData } = useContext(DataContext)
    const inputRef = useRef()

    useEffect(() => {
        function onAlphaNumericHandler(event) {
            if(
                !(inputRef.current === document.activeElement)&&
                isKeyPressEventAlphaNumeric(event)
            ) {
                inputRef.current.focus()
            }
        }
        window.addEventListener("keydown", onAlphaNumericHandler)
        return () => { window.removeEventListener("keydown", onAlphaNumericHandler) }
    }, [])

    function performSearch(searchInput) {
        filterData(data => (data.name.toLowerCase().search(searchInput.toLowerCase()) >= 0))
    }

    return (
            <form 
                className="search_bar_container"
                onSubmit={e => {
                    e.preventDefault()
                    performSearch(e.target.elements.searchInput.value)
                }}
            >
                <button type="submit">
                    <SearchIcon height="32px" width="32px" color="#0ea6fe" />
                </button>

                <input 
                    ref={inputRef}
                    type="text"
                    name="searchInput"
                    onChange={e => performSearch(e.target.value)}
                    placeholder="Buscar ferramenta"
                    autoComplete="off"
                />
            </form>
    )
}