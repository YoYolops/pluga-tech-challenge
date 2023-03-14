import DataContext from "../DataContext";
import { useContext, useMemo } from "react";
import HistoricItem from "./HistoricItem";
import "./Historic.css"
import { motion } from "framer-motion";

export default function Historic({ isVisible }) {
    const { historic, highestRanked } = useContext(DataContext);
    console.log("historic")

    function mergeHighestRankedWithHistoric() {
        let recommendedArray = []

        if(historic.length) recommendedArray = [...highestRanked, ...historic]
        else recommendedArray = [...highestRanked]

        return recommendedArray.slice(recommendedArray.length - 3, recommendedArray.length)
    }

    const recommendations = useMemo(mergeHighestRankedWithHistoric, [historic, highestRanked])

    return (
        <motion.section
            layout
            className="historic_container"
            variants={historicVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <motion.h2 layout id="historic_title">{historic.length ? "Últimas Ferramentas Visualizadas:" : "Destaques da Pluga:"}</motion.h2>
            <motion.div className="historic_cards_wrapper">
                {recommendations.map((data, index) => <HistoricItem key={`${data.name}historicitem${index}`} itemData={data} />)}
            </motion.div>
        </motion.section>
    ) 
}

const historicVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .3,
        }
    }
}