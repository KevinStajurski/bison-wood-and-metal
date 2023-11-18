import styles from './page.module.css'
import Image from 'next/image'

export default function Contacto() {
    return (
        <div id="contacto" className={styles.Contacto}>
            <div className={styles.ContactoDivUno}>
                <Image src="/logo.png" width={155} height={48} />
            </div>
            <div className={styles.ContactoDivDos}>
                <div>
                    <Image src="/location.png" width={30} height={30} /> <p>Félix Paz 1838 Córdoba</p>
                </div>
                <div>
                    <Image src="/whatsapp.png" width={30} height={30} /> <p>+54 9 3515 59-6646</p>
                </div>
                <div>
                    <Image src="/email.png" width={30} height={30} /> <p>gestion.bison@gmail.com</p>
                </div>
                <div>
                    <Image src="/instagram.png" width={30} height={30} /> <p>bison_woodmetal</p>
                </div>
            </div>
        </div>
    )
}