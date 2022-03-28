import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/pizza.png' alt='' width='300' height='200'/>
        </div>
    )
}

export default PizzaCard