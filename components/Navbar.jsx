import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
// import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src='/img/logo.png' alt='' width='52' height='52'/>
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>
          ORDER NOW!
        </div>
        <div className={styles.text}>
          012 345 678
        </div>
      </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          
          <li className={styles.listItem}>Home</li>
        
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <h1 className={styles.fav_food}>Fav-Food</h1>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div  className={styles.cart}>
        <Image src='/img/cart.png' alt='' width={50} height={50}/>
        <div className={styles.counter}>2</div>
        </div>
        
        
      </div>
      
      </div>
  )
}

export default Navbar