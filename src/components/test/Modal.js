import { motion } from "framer-motion"

export default function Modal({ data, close }) {
    return (
        <motion.div className="modal" onClick={close}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>{data.name}</h1>
            <h2>{data.surname}</h2>
            <p>{data.description}</p>
        </motion.div>
    )
}

const modalVariants = {
    visible: {
        scale: 1,
    },
    hidden: {
        scale: 0,
    },
    exit: {
        scale: 0
    }
}