import styles from './page.module.css'
import Navbar from './navbar'
import Home from './home'
import Nosotros from './nosotros'
import Divisiones from './divisiones'
import Contacto from './contacto'
import Image from 'next/image'

export default function Page() {
    return (
        <main className={styles.Main}>
            <Navbar />
            <Home />
            <Nosotros />
            <Divisiones />
            <Contacto />
            <a className={styles.Whatsapp} href="https://wa.me/543515596646" target='_blank'> <Image src="/whatsapp_fixed.png" alt='logo whatsapp' width={38} height={38} /> </a>
        </main>
    )
}