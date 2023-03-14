import { motion } from "framer-motion";
import { isColorLightOrDark } from "../../helpers";

export default function Anchor({ color, link, children, isVisible }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noreferrer" 
            style={anchorStylesFactory(color, isVisible)}
            variants={anchorVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            {children}
        </motion.a>
    )
}

const anchorVariants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: .3
        }
    }
}

function anchorStylesFactory(color, isVisible) {
    return {
        width: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        borderRadius: 16,
        backgroundColor: color,
        textDecoration: "none",
        color: isColorLightOrDark(color) === "light" ? "#000000" : "#ffffff",
        pointerEvents: isVisible ? "unset" : "none",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
    }
}
