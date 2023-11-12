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

    const [selected, setSelected] = useState("herreria")

    const [image, setImage] = useState("/herreria.png")
    const [description, setDescription] = useState("Descripción del área de herreria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
    const [imagesArray, setImagesArray] = useState(["/herreria_1.png"])

    const category = (item) => {
        if (item == "herreria") {
            setImage("/herreria.png")
            setDescription("Descripción del área de herreria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/herreria_1.png"])
            setSelected("herreria")
        }

        if (item == "carpinteria") {
            setImage("/carpinteria.png")
            setDescription("Descripción del área de carpinteria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/carpinteria_1.png"])
            setSelected("carpinteria")
        }

        if (item == "construccion") {
            setImage("/construccion.png")
            setDescription("Descripción del área de construcción. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo debitis ut veritatis repellendus minus libero doloribus architecto pariatur")
            setImagesArray(["/construccion_1.png"])
            setSelected("construccion")
        }
    }

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
                        <Image src={imagesArray[0]} width={550} height={400} />
                        <div className={styles.DivisionesDivDosD}>
                            <Image src="/izquierda.svg" width={36} height={36} /> <p className={styles.inline}>Breve descripción de la obra</p> <Image src="/derecha.svg" width={36} height={36}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}