import "./index.css"
import Card from "./Card"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Modal from "./Modal"

export default function CardList() {
    const [ selectedIndex, setSelectedIndex ] = useState(0)

    return (
        <div className="cards_container">
            {
                data.map((data, index) => <Card key={index} layoutId={index} data={data} select={() => {setSelectedIndex(index)}} close={() => setSelectedIndex(0)}/>)
            }

            <AnimatePresence
                layout
                mode="wait"
            >
                {selectedIndex &&
                    <Modal layoutId={selectedIndex} data={data[selectedIndex]} close={() => setSelectedIndex(0)}/>
                }
            </AnimatePresence>
        </div>
    )
}

const data = [
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },
    {
        name: "yoyo",
        surname: "lopes",
        description: 'Yohan: Significa “Deus é cheio de graça”, “agraciado por Deus”, “a graça e misericórdia de Deus”, “Deus perdoa”, “presente”, “deus é misericórdia”.'
    },

]