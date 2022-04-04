import { useState } from 'react'
import styles from '../styles/OrderDetails.module.css'


const OrderDetail = ({total, createOrder}) => {
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')
    const handleClick = ()=>{
        createOrder({customer,address,total,method:0})
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>You will pay $4 after delivery</h1>
        <div className={styles.item}>
            <label >Name Surname</label>
            <input type="text" 
            placeholder='abhishek' 
            className={styles.input} 
            onChange={(e)=>setCustomer(e.target.value)} />
             </div>
        <div className={styles.item}>
            <label >Phone</label>
            <input type="text" 
            placeholder='1 234 567 893' 
            className={styles.input} 
             />
             </div>
        <div className={styles.item}>
            <label >Address</label>
            <input type="text" 
            placeholder='VPO Mustafabad Dist Yamuna Nagar' 
            className={styles.input} 
            onChange={(e)=>setAddress(e.target.value)} />
             </div>
       <button className={styles.button} onClick={handleClick()}>Order</button>
    </div>
    </div>
  )
}


export default OrderDetail