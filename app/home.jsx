import Image from 'next/image'
import styles from './page.module.css'

// export const metadata = {
//     title: 'Home',
//     description: 'Bison Wood & Metal',
//     keywords: 'Bison, construcción, integral, constructora, carpintería, herrería, decoración, interiorismo, divisiones',
// }

export default function Home() {
    return (
        <div className={styles.Home}>
            <Image src="/background_home.png" width={1279} height={528} alt="construccion" />
            <h1>Construcción Integral</h1>
        </div>
    )
}