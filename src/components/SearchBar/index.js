import "./SearchBar.css"
import { useState } from "react"

export default function SearchBar() {
    const [ searchQuery, setSearchQuery ] = useState("")

    return (
        <div className="search_bar_container">
            <input 
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Faça sua busca aqui"
            />

            <button>
                pesquisar
            </button>
        </div>
    )
}