import { motion } from "framer-motion"
import "./Historic.css"
import { isColorLightOrDark } from "../../helpers"

export default function HisotricItem({ itemData }) {
    return (
        <motion.a
            layout
            className="historic_item_container"
            href={itemData.link}
            style={{
                background: itemData.app_id ? "unset" : "linear-gradient(to bottom, #27aae1 50%, white 50%)",
                backgroundColor: itemData.app_id ? itemData.color : "#27aae1",
                color: isColorLightOrDark(itemData.color) === "dark" ? "#fff" : "#000",
            }}
        >
            <img
                className="historic_item_icon"
                src={itemData.icon}
                style={{backgroundColor: itemData.color}}
                alt={`Logomarca de ${itemData.name}`}
            />

            <p id="historic_item_name">{itemData.name}</p>
        </motion.a>
    )
}