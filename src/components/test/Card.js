import { motion } from "framer-motion"
import "./index.css"

export default function Card({ data, select, close }) {
    return (
        <motion.div className="card" onClick={select}>
            <h1>{data.name}</h1>
            <h2>{data.surname}</h2>
        </motion.div>
    )
}