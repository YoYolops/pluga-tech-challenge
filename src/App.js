import { useState, useContext, useEffect } from "react";
import DataContext from "./components/DataContext";
import AppCard from "./components/AppCard";
import "./App.css";
import Header from "./components/Header";
import NoDataFound from "./components/generics/NoDataFound";

function App() {
    const { getData, updateHistoric, filteredData } = useContext(DataContext)
    const [ selectedCard, setSelectedCard ] = useState({});
    const [ paginatedData, setPaginatedData ] = useState({
        data: getData(0),
        chunk: 0,
    });

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if(entries.some(entry => entry.isIntersecting)) {
                setPaginatedData(prev => ({
                    data: [...prev.data, ...getData(prev.chunk + 1)],
                    chunk: prev.chunk + 1,
                }))
            }
        })

        intersectionObserver.observe(document.querySelector("#sentinel"))

        return () => intersectionObserver.disconnect()
    }, [])

    function closeModal(currentSelectedData) {
        setSelectedCard({})
        updateHistoric(currentSelectedData)
    }

    function appCardGenerator(mainData, ...rest) {
        return mainData.map((data, index) => (
            <AppCard 
                appData={data}
                isOpen={selectedCard.app_id === data.app_id}
                key={`${data.app_id}-appcard-${index}`}
                select={() => { setSelectedCard(data) }} 
                close={() => { closeModal(data) }} 
            />
        ))
    }

    function wichDataShouldBeRendered() {
        if(filteredData.length) return appCardGenerator(filteredData)
        if(filteredData === false) return NoDataFound({ children: "Nenhuma ferramenta encontrada" })
        else return appCardGenerator(paginatedData.data)
    }

    return (
        <div className="app_container">
            <Header />
            <section className="cards_container">{ wichDataShouldBeRendered() }</section>
            <div id="sentinel" />
        </div>
    );
}

export default App;
