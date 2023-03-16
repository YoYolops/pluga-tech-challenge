import { createContext, useEffect, useState } from "react";
import APP_CONFIG from "../app.config";
import { findHighestKey, formatUnderscoredString } from "../helpers";

const DataContext = createContext({});

export function DataContextProvider({ children }) {
    const [ highestRanked, setHighestRanked ] = useState([])
    const [ historic, setHistoric ] = useState([])
    const [ filteredData, setFilteredData ] = useState([])

    function getData(paginationChunk) {
        const firstIndex = paginationChunk*APP_CONFIG.pagination
        const lastIndex = firstIndex+APP_CONFIG.pagination
        
        if(firstIndex >= APP_CONFIG.mainData.length) return [];
        return APP_CONFIG.mainData.slice(firstIndex, APP_CONFIG.mainData[lastIndex] ? lastIndex : APP_CONFIG.mainData.length)
    }

    function updateHistoric(lastSelected) {
        setHistoric(prev => {
            const recommendedSet = new Set([...prev, lastSelected])
            if(recommendedSet.size > 3) return [...recommendedSet].slice(recommendedSet.size-3, recommendedSet.size)
            return [...recommendedSet]
        })
    }

    useEffect(() => {
        void async function getUpdatedPlugaRanking() {
            const rankingData = await fetch(APP_CONFIG.rankingBaseUrl)
                .then(response => response.json())
    
            const topFour = 
                findHighestKey({ array: rankingData, keyName: "rank", topAmount: 4, ignore: ["zaga"] })
                .map(highestRank => ({
                    ...highestRank,
                    name: formatUnderscoredString(highestRank.name),
                    link: APP_CONFIG.appLinksBaseUrl + `${highestRank.name}/`,
                    color: "#ffffff",
                    icon: `${APP_CONFIG.appIconLinksBaseUrl + highestRank.name}/${highestRank.name}-icon.svg`
                }))
            setHighestRanked(topFour)
        }()
    }, [])

    function filterData(filterFunction) {
        setFilteredData(() => {
            const preFilteredData = APP_CONFIG.mainData.filter(filterFunction)
            if(preFilteredData.length) return preFilteredData
            return false
        })
    }
    
    return (
        <DataContext.Provider value={{
            getData,
            historic,
            updateHistoric,
            highestRanked,
            filterData,
            filteredData
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext;