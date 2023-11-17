import Image from 'next/image'
import styles from './page.module.css'

export default function Nosotros() {
    return (
        <div id='nosotros' className={styles.Nosotros}>

            <div className={styles.NosotrosDivUno}>
                <h2>Nosotros</h2>
                <p>Somos <strong>Bison Wood & Metal</strong>, una empresa constructora ubicada en Córdoba. Nuestra misión es proporcionar soluciones integrales en el campo de la construcción.</p>
            </div>

            <div className={styles.NosotrosDivDos}>
                <Image src="/background_que_hacemos.png" width={900} height={320} alt="oficina" />
                <div className={styles.NosotrosDivDosA}>
                    <h3>Qué hacemos</h3>
                    <p>Ejecutamos <strong>proyectos de construcción</strong> llave en mano para empresas constructoras y desarrollistas, integrando nuestros servicios con <strong>compromiso transparencia</strong> y <strong>capacidad de gestión.</strong></p>
                </div>
            </div>

            <div className={styles.NosotrosDivTres}>
                <div className={styles.NosotrosDivTresA}>
                    <h3>Servicio integrado</h3>
                    <p>Todos los servicios en un solo lugar: <strong>construcción, herrería, carpintería.</strong> <br /> Garantizamos el funcionamiento y la ejecución de los proyectos mediante la <strong>comunicación interna fluida</strong> entre nuestras áreas.</p>
                </div>
                <div className={styles.NosotrosDivTresB}>
                    <div className={styles.NosotrosAreas}><Image src="/construccion.png" width={80} height={80} alt="constructora" /><p className={styles.NosotrosDescripcionAreas}>Constructora</p></div>
                    <div className={styles.NosotrosCarpinteriaHerreria}><div className={styles.NosotrosAreas}><Image src="/carpinteria.png" width={80} height={80} alt="carpinteria" /><p className={styles.NosotrosDescripcionAreas}>Carpinteria</p></div><div className={styles.NosotrosAreas}><Image src="/herreria.png" width={80} height={80} alt="herreria" /><p className={styles.NosotrosDescripcionAreas}>Herreria</p></div></div>
                    <div className={styles.NosotrosAreas}><Image src="/arquitectura.png" width={80} height={80} alt="arquitectura" /><p className={styles.NosotrosDescripcionAreas}>Arquitectura e interiorismo</p></div>
                </div>
            </div>

            <div className={styles.NosotrosDivCuatro}>
                <Image src="/background_metodologia_de_trabajo.png" width={965} height={676} alt='Banco Galicia' />
                <div className={styles.NosotrosDivCuatroA}>
                    <h3>Metodología de trabajo</h3> <br /> <br />
                    <p>Aplicamos ingeniería, planificación y logística para que la ejecución de proyectos se realice principalmente en la planta, reduciendo significativamente el tiempo necesario en la obra, que se limita a la etapa de instalación.</p><br /><br />
                    <p>REDUCIMOS UN &nbsp; &nbsp; <span>70%</span> &nbsp; &nbsp; EL TIEMPO EN OBRA</p>
                </div>
                <h4 id="divisiones">Divisiones</h4>
            </div>

        </div>
    )
}