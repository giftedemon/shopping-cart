import styles from "./CartProduct.module.css";
import { useState, useEffect } from "react";

function CartProduct({ image, title, price, id, decreaseClick, increaseClick, quantity }) {
    const [inputQuantity, setInputQuantity] = useState();

    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("cart") || "{}"));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(localData));
    }, [localData]);

    const addToCart = (id) => {
        setLocalData((prev) => ({ ...prev, [id]: 1 }));
    };

    // const increaseClick = (id) => {};

    return (
        <div className={styles.cart_product}>
            <div className={styles.img_div}>
                <object data={image} type="image/jpeg" className={styles.img}>
                    <img src="src/assets/knight.jpg" alt="" className={styles.img} />
                </object>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>Price: ${price}</p>
            </div>
            <div className={styles.quantity}>
                <button className={styles.less_button}>-</button>
                <input type="number" className={styles.input} value={quantity} />
                <button className={styles.more_button}>+</button>
            </div>
        </div>
    );
}

export default CartProduct;
