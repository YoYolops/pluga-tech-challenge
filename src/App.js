import { useState, useContext, useEffect } from "react";
import DataContext from "./components/DataContext";
import AppCard from "./components/AppCard";
import "./App.css";
import Header from "./components/Header";

function App() {
    const { getData, updateHistoric, filteredData } = useContext(DataContext)
    const [ renderedData, setRenderedData ] = useState({
        data: getData(0),
        chunk: 0
    });
    const [ selectedCard, setSelectedCard ] = useState({});

    function closeModal(currentSelectedData) {
        setSelectedCard({})
        updateHistoric(currentSelectedData)
    }

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if(entries.some(entry => entry.isIntersecting)) {
                setRenderedData(prev => ({
                    data: [...prev.data, ...getData(prev.chunk + 1)],
                    chunk: prev.chunk + 1
                }))
            }
        })

        intersectionObserver.observe(document.querySelector("#sentinel"))

        return () => intersectionObserver.disconnect()
    }, [])

    return (

        <div className="app_container">
            <Header />

            <section className="cards_container">{
                (filteredData.length ? filteredData : renderedData.data)
                    .map((data, index) => <AppCard appData={data}
                                                isOpen={selectedCard.app_id === data.app_id}
                                                key={`${data.app_id}-appcard-${index}`}
                                                select={() => { setSelectedCard(data) }} 
                                                close={() => { closeModal(data) }}
                                                mode="expandable" />)
            }
            
                <div id="sentinel" />
            </section>
        </div>
    );
}

export default App;
