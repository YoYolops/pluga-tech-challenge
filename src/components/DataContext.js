import { createContext, useState } from "react";
import data from "../assets/data.json";
import config from "../app.config";

const DataContext = createContext({});

export function DataContextProvider({ children }) {

    function getData(paginationChunk) {
        const firstIndex = paginationChunk*config.pagination
        const lastIndex = firstIndex+config.pagination
        
        if(firstIndex >= data.length) return;
        return data.slice(firstIndex, data[lastIndex] ? lastIndex : data.length)
    }
    
    return (
        <DataContext.Provider value={{
            getData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;