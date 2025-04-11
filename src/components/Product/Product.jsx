import styles from "./Product.module.css";

export default function Product() {
    return (
        <div className={styles.product}>
            <div className={styles.img_div}>
                <img src="src/assets/knight.jpg" alt="" className={styles.img} />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h3 className={styles.title}>A title lmao</h3>
                    <p className={styles.price}>Price: $40</p>
                </div>
                <div className={styles.add_cart}>
                    <button className={styles.add_button}>Add to cart</button>
                    <input type="number" className={styles.quantity} />
                </div>
            </div>
        </div>
    );
}
