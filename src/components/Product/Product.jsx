import styles from "./Product.module.css";

export default function Product({ title, image, price, id, handleClick, inCart, color }) {
    return (
        <div className={styles.product} id={id}>
            <div className={styles.img_div}>
                <object data={image} type="image/jpeg" className={styles.img}>
                    <img src="src/assets/knight.jpg" alt="" className={styles.img} />
                </object>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>Price: ${price}</p>
            </div>
            <div className={styles.add_cart}>
                <button
                    className={styles.add_button}
                    onClick={() => handleClick(id, price)}
                    style={{ borderColor: color, color: color }}
                >
                    {inCart ? "Delete from Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}
