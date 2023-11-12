"use client"

import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react'

// export const metadata = {
//     title: 'Divisiones',
//     description: 'Bison Wood & Metal - Divisiones',
//     keywords: 'Bison, construcción, integral, constructora, carpintería, herrería, decoración, interiorismo, divisiones',
// }

export default function Divisiones() {

    const [selected, setSelected] = useState("")
    const [counter, setCounter] = useState(0) 
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [imagesArray, setImagesArray] = useState([])

    const category = (item) => {
        if (item == "herreria") {
            setImage("/herreria.png")
            setDescription("Descripción del área de herreria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/herreria_0.png","/herreria_1.png","/herreria_2.png"])
            setSelected("herreria")
            setCounter(0)
        }

        if (item == "carpinteria") {
            setImage("/carpinteria.png")
            setDescription("Descripción del área de carpinteria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/carpinteria_0.png", "/carpinteria_1.png", "/carpinteria_2.png", "/carpinteria_3.png", "/carpinteria_4.png"])
            setSelected("carpinteria")
            setCounter(0)
        }

        if (item == "construccion") {
            setImage("/construccion.png")
            setDescription("Descripción del área de construcción. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/construccion_0.png", "/construccion_1.png"])
            setSelected("construccion")
            setCounter(0)
        }
    }

    const anterior = () => {
        counter>0 && setCounter(counter-1)
    }

    const siguiente = () => {
        counter<(imagesArray.length-1) && setCounter(counter+1)
    }

    !selected && category("herreria")

    return (
        <div className={styles.Divisiones}>

            <div className={styles.DivisionesDivUno}>
                <h4 onClick={() => category("herreria")} className={selected == "herreria" && styles.Selected}>Herrería</h4>
                <h4 onClick={() => category("carpinteria")} className={selected == "carpinteria" && styles.Selected}>Carpinteria</h4>
                <h4 onClick={() => category("construccion")} className={selected == "construccion" && styles.Selected}>Construcción</h4>
            </div>

            <div className={styles.DivisionesDivDos}>

                <div className={styles.DivisionesDivDosA}>
                    <Image src={image} width={100} height={100} />
                    <p>{description}</p>
                </div>

                <div className={styles.DivisionesDivDosB}>
                    <div className={styles.DivisionesDivDosC}>
                        <Image src={imagesArray[counter]} width={550} height={400} />
                        <div className={styles.DivisionesDivDosD}>
                            <Image onClick={anterior} src="/izquierda.svg" width={36} height={36} /> <p>Breve descripción de la obra</p> <Image onClick={siguiente} src="/derecha.svg" width={36} height={36} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}