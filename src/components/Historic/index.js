import DataContext from "../DataContext";
import { useContext } from "react";
import HistoricItem from "./HistoricItem";
import "./Historic.css"
import { motion } from "framer-motion";

export default function Historic() {
    const { historic, highestRanked } = useContext(DataContext);

    function mergeHighestRankedWithHistoric() {
        let recommendedArray = []

        if(historic.length) recommendedArray = [...highestRanked, ...historic]
        else recommendedArray = [...highestRanked]

        return recommendedArray.slice(recommendedArray.length - 3, recommendedArray.length)
    }

    return (
        <>
            <motion.h2 layout id="historic_title">{historic.length ? "Últimas Ferramentas Visualizadas:" : "Destaques da Pluga:"}</motion.h2>
            <motion.div className="historic_cards_wrapper">
                {mergeHighestRankedWithHistoric()?.map((data, index) => <HistoricItem key={`${data.name}historicitem${index}`} itemData={data} />)}
            </motion.div>
        </>
    ) 
}