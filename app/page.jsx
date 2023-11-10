import styles from './page.module.css'
import Navbar from './navbar'
import Home from './home'
import Nosotros from './nosotros'
import Divisiones from './divisiones'
import Contacto from './contacto'

export default function Page() {
    return (
        <main className={styles.Main}>
            <Navbar />
            <Home />
            <Nosotros />
            <Divisiones />
            <Contacto />
        </main>
    )
}