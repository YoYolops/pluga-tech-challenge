import { motion } from "framer-motion";
import "./AppCard.css"
import Anchor from "../generics/Anchor";
import Historic from "../Historic";
import CloseIcon from "../../assets/icons/CloseIcon";

export default function AppCard({ appData, select, isOpen, close }) {

    return (
        <motion.div className="app_card" layout
            onClick={select}
        >
            <motion.div layout className="app_card_container"
                isOpen={`${isOpen}`}
                transition={baseTransition}
                onClick={e => {
                    if(isOpen) {
                        e.stopPropagation()
                        close()
                    }
                }}
            >
                <motion.div layout className="modal"
                    transition={{ ...baseTransition, when: "beforeChildren" }}
                    onClick={e => { if(isOpen) e.stopPropagation() }}
                >
                    <motion.section className="details_container">
                        <motion.img layout className="app_icon"
                            variants={appLogoVariants}
                            initial="closed"
                            animate={isOpen ? "opened" : "closed"}
                            style={{backgroundColor: appData.color}}
                            alt={`Logo de ${appData.name}`}
                            src={appData.icon}
                        />

                        <motion.div layout className="text_details">
                            <p>{appData.name}</p>
                            <Anchor link={appData.link} color={appData.color} isVisible={isOpen}>Acessar</Anchor>
                        </motion.div>
                    </motion.section>

                
                    <motion.section
                        layout
                        className="historic_container"
                        variants={historicVariants}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                    >
                        <Historic />
                    </motion.section>
                    
                    <motion.button layout className="close_button"
                        initial={{ opacity: 0 }}
                        style={{ pointerEvents: isOpen ? "unset" : "none" }}
                        animate={isOpen ? {opacity: 1} : {opacity: 0}}
                        onClick={e => {
                            e.stopPropagation()
                            close()
                        }}
                    >
                        <CloseIcon color={appData.color}/>
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const appLogoVariants = {
    opened: {
        scale: 1.5,
        marginRight: "50px"
    },
    closed: { scale: .9 },
}

const baseTransition = {
    type: "spring",
    stiffness: 350,
    damping: 50,
}

const historicVariants = {
    visible: {
        opacity: 1,
        transition: {
            delay: .3,
        }
    },
    hidden: {
        opacity: 0,
    }
}