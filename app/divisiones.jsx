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
    const [description, setDescription] = useState("Descripción del área de herreria.")
    const [imagesArray, setImagesArray] = useState(["/herreria_1.png"])

    const category = (item) => {
        if (item == "herreria") {
            setImage("/herreria.png")
            setDescription("Descripción del área de herreria.")
            setImagesArray(["/herreria_1.png"])
            setSelected("herreria")
        }

        if (item == "carpinteria") {
            setImage("/carpinteria.png")
            setDescription("Descripción del área de carpinteria.")
            setImagesArray(["/carpinteria_1.png"])
            setSelected("carpinteria")
        }

        if (item == "construccion") {
            setImage("/constructora.png")
            setDescription("Descripción del área de construcción. ")
            setImagesArray(["/construccion_1.png"])
            setSelected("construccion")
        }
    }

    return (
        <div className={styles.Divisiones}>

            <div className={styles.DivisionesDivUno}>
                <button className={styles.Button} onClick={() => category("herreria")}><h4 className={selected=="herreria" && styles.ButtonSelected}>Herrería</h4></button>
                <button className={styles.Button} onClick={() => category("carpinteria")}><h4 className={selected=="carpinteria" && styles.ButtonSelected}>Carpinteria</h4></button>
                <button className={styles.Button} onClick={() => category("construccion")}><h4 className={selected=="construccion" && styles.ButtonSelected}>Construcción</h4></button>
            </div>

            <div className={styles.DivisionesDivDos}>

                <div className={styles.DivisionesDivDosA}>
                    <Image src={image} width={100} height={100} />
                    <p>{description}</p>
                </div>

                <div className={styles.DivisionesDivDosB}>
                    <div className={styles.DivisionesDivDosC}>
                        <Image src={imagesArray[0]} width={550} height={400} />
                        <p>Breve descripción de la obra</p>
                    </div>
                </div>

            </div>
        </div>
    )
}