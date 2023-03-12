import { useState, useContext, useEffect } from "react";
import DataContext from "./components/DataContext";
import AppCard from "./components/AppCard";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { motion } from "framer-motion";

function App() {
    const { getData } = useContext(DataContext)
    const [ renderedData, setRenderedData ] = useState(getData(0));
    const [ selectedCard, setSelectedCard ] = useState({});
    const [ historic, setHistoric ] = useState([]);

    function updateHistoric(lastSelected) {
        setHistoric(prev => {
            if(prev.length >= 3) return [...prev.slice(0, 2), lastSelected]
            return [...prev, lastSelected]
        })
    }

    function closeModal(currentSelectedData) {
        setSelectedCard({})
        updateHistoric(currentSelectedData)
    }

    return (
        <div className="app_container">
            <SearchBar />

            <section className="cards_container">{
                renderedData.map(data => <AppCard appData={data} 
                                                  isOpen={selectedCard.app_id === data.app_id}
                                                  historic={historic}
                                                  select={() => { setSelectedCard(data) }} 
                                                  close={() => { closeModal(data) }}/>)
            }</section>
        </div>
    );
}

export default App;
