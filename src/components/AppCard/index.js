import { AnimatePresence, motion } from "framer-motion";
import "./AppCard.css"
import Anchor from "../generics/Anchor";

export default function AppCard({ appData, select, mode, isOpen, close }) {

    return (
        <div className="app_card"
            onClick={select}
        >
            <motion.div layout className="app_card_container"
                isOpen={`${isOpen}`}
                transition={baseTransition}
            >
                <motion.div layout className="modal">
                    <section className="details_container">
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
                    </section>

                    <section className="historic">

                    </section>
                    
                    <motion.button layout className="close_button"
                        initial={{ opacity: 0 }}
                        animate={isOpen ? {opacity: 1} : {opacity: 0}}
                        onClick={e => {
                            e.stopPropagation()
                            close()
                        }}
                    >
                        FECHAR
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

const appLogoVariants = {
    opened: {
        scale: 1.3,
        marginRight: "30px"
    },
    closed: { scale: .9 },
}

const baseTransition = {
    type: "spring",
    stiffness: 350,
    damping: 50,
    duration: 200,
}