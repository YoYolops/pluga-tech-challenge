import { useState, useContext, useEffect } from "react";
import DataContext from "./components/DataContext";
import AppCard from "./components/AppCard";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
    const { getData, updateHistoric } = useContext(DataContext)
    const [ renderedData, setRenderedData ] = useState(getData(0));
    const [ selectedCard, setSelectedCard ] = useState({});

    function closeModal(currentSelectedData) {
        setSelectedCard({})
        updateHistoric(currentSelectedData)
    }

    return (
        <div className="app_container">
            <SearchBar />

            <section className="cards_container">{
                renderedData.map((data, index) => <AppCard appData={data}
                                                  isOpen={selectedCard.app_id === data.app_id}
                                                  key={`${data.app_id}-appcard-${index}`}
                                                  select={() => { setSelectedCard(data) }} 
                                                  close={() => { closeModal(data) }}
                                                  mode="expandable" />)
            }</section>
        </div>
    );
}

export default App;
