import { motion } from "framer-motion";
import "./AppCard.css"

export default function AppCard({ appData }) {

    return (
        <motion.div
            className="app_card_container"
        >
            <img
                alt={`Logo de ${appData.name}`}
                src={appData.icon}
            />
            <p>{appData.name}</p>
        </motion.div>
    )
}