"use client"

import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Divisiones() {

    const [selected, setSelected] = useState("")
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [imagesArray, setImagesArray] = useState([])

    const category = (item) => {
        if (item == "herreria") {
            setImage("/herreria.png")
            setDescription("Nuestra experiencia abarca una amplia gama de productos, desde mesas y placards hasta revestimientos interiores, diseñados  desde el suelo hasta el techo.")
            setImagesArray(["/herreria_00.png", "/herreria_01.png", "/herreria_02.png", "/herreria_03.png"])
            setSelected("herreria")
            setCounter(0)
        }

        if (item == "carpinteria") {
            setImage("/carpinteria.png")
            setDescription("Nuestra experiencia abarca una amplia gama de productos, desde mesas y placards hasta revestimientos interiores, diseñados  desde el suelo hasta el techo.")
            setImagesArray(["/carpinteria_00.png", "/carpinteria_01.png", "/carpinteria_02.png", "/carpinteria_03.png", "/carpinteria_04.png", "/carpinteria_05.png", "/carpinteria_06.png", "/carpinteria_07.png", "/carpinteria_08.png", "/carpinteria_09.png", "/carpinteria_10.png", "/carpinteria_11.png", "/carpinteria_12.png", "/carpinteria_13.png", "/carpinteria_14.png"])
            setSelected("carpinteria")
            setCounter(0)
        }

        if (item == "construccion") {
            setImage("/construccion.png")
            setDescription("Nuestra experiencia abarca una amplia gama de productos, desde mesas y placards hasta revestimientos interiores, diseñados  desde el suelo hasta el techo.")
            setImagesArray(["/construccion_00.png", "/construccion_01.png", "/construccion_02.png", "/construccion_03.png"])
            setSelected("construccion")
            setCounter(0)
        }
    }

    const anterior = () => {
        counter > 0 ? setCounter(counter - 1) : setCounter(imagesArray.length-1)
    }

    const siguiente = () => {
        counter < imagesArray.length-1 ? setCounter(counter + 1) : setCounter(0)
    }

    !selected && category("herreria")

    return (
        <div className={styles.Divisiones}>

            <div className={styles.DivisionesDivUno}>
                <h4 onClick={() => category("herreria")} className={selected == "herreria" && styles.Selected}>Herrería</h4>
                <h4 onClick={() => category("carpinteria")} className={selected == "carpinteria" && styles.Selected}>Carpintería</h4>
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