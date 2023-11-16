import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.Home}>
            <Image src="/background_home.png" width={1279} height={528} alt="construccion" />
            <h1>Construcción <br /> Integral</h1>
        </div>
    )
}