import { useState, useContext, useEffect } from "react";
import DataContext from "./components/DataContext";
import AppCard from "./components/AppCard";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
    const { getData } = useContext(DataContext)
    const [ renderedData, setRenderedData ] = useState(getData(0));

    useEffect(() => {console.log(renderedData)}, [renderedData])

  return (
    <div className="app_container">
        <SearchBar />

        <div className="cards_container">
            {
                renderedData.map(appData => <AppCard appData={appData}/>)
            }
        </div>
    </div>
  );
}

export default App;
