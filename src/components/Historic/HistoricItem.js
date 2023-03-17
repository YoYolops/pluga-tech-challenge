import "./Historic.css";
import { isColorLightOrDark } from "../../helpers";
import { memo, useMemo } from "react";

function HistoricItem({ itemData }) {
    const colorType = useMemo(() => isColorLightOrDark(itemData.color), [itemData])
    return (
        <a
            className="historic_item_container"
            href={itemData.link}
            style={{
                background: itemData.app_id ? "unset" : "linear-gradient(to bottom, #27aae1 50%, white 50%)",
                backgroundColor: itemData.app_id ? itemData.color : "#27aae1",
                color: colorType === "dark" ? "#fff" : "#000",
                border: itemData.app_id ? "none" : "1px solid #27aae1"
            }}
        >
            <img
                className="historic_item_icon"
                src={itemData.icon}
                alt={`Logomarca de ${itemData.name}`}
                style={{
                    backgroundColor: itemData.app_id ? itemData.color : "#27aae1",
                    border: itemData.app_id ? "2px solid white" : "2px solid white" 
                }}
            />

            <p id="historic_item_name">{itemData.name}</p>
        </a>
    )
}

export default memo(HistoricItem);