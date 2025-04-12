import styles from "./Product.module.css";

export default function Product({ title, image, price, id }) {
    return (
        <div className={styles.product} id={id}>
            <div className={styles.img_div}>
                <img src={image} alt="" className={styles.img} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>Price: ${price}</p>
            </div>
            <div className={styles.add_cart}>
                <button className={styles.add_button}>Add to cart</button>
            </div>
        </div>
    );
}
