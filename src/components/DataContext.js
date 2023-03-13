import { createContext, useEffect, useState } from "react";
import data from "../assets/data.json";
import config from "../app.config";
import { findHighestKey, formatUnderscoredString } from "../helpers";
const DataContext = createContext({});

export function DataContextProvider({ children }) {
    const [ highestRanked, setHighestRanked ] = useState([])
    const [ historic, setHistoric ] = useState([])

    function getData(paginationChunk) {
        const firstIndex = paginationChunk*config.pagination
        const lastIndex = firstIndex+config.pagination
        
        if(firstIndex >= data.length) return;
        return data.slice(firstIndex, data[lastIndex] ? lastIndex : data.length)
    }

    function updateHistoric(lastSelected) {
        setHistoric(prev => {
            if(prev.length >= 3) return [...prev.slice(1, 3), lastSelected]
            return [...prev, lastSelected]
        })
    }

    useEffect(() => {
        async function getUpdatedPlugaRanking() {
            const data = await fetch("https://api-support.pluga.co/apps/")
                .then(response => response.json())
    
            const topFour = 
                findHighestKey({ array: data, keyName: "rank", topAmount: 4, ignore: ["zaga"] })
                .map(highestRank => ({
                    ...highestRank,
                    name: formatUnderscoredString(highestRank.name),
                    link: config.appLinksBaseUrl + `${highestRank.name}/`,
                    color: "#ffffff",
                    icon: `${config.appIconLinksBaseUrl + highestRank.name}/${highestRank.name}-icon.svg`
                }))
    
            setHighestRanked(topFour)
        }

        getUpdatedPlugaRanking()
    }, [])

    
    return (
        <DataContext.Provider value={{
            getData,
            historic,
            updateHistoric,
            highestRanked
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;