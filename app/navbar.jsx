import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Navbar() {
    return (
        <div className={styles.NavBar}>
            <Link href="/">
                <Image src="/logo.png" width={155} height={48} alt="Logo Bison Wood & Metal" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <a href="#nosotros">Nosotros</a>
                    </li>
                    <li>
                        <a href="#divisiones">Divisiones</a>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}