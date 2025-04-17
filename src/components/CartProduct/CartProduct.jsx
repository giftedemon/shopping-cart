import styles from "./CartProduct.module.css";
import { useState, useEffect } from "react";

function CartProduct({
    image,
    title,
    price,
    id,
    decreaseClick,
    increaseClick,
    quantity,
    handleChange,
}) {
    const [inputValue, setInputValue] = useState(quantity);

    useEffect(() => {
        setInputValue(quantity);
    }, [quantity]);

    const handleInputChange = (e) => {
        let value = e.target.value;

        // Allow empty string
        if (value === "") {
            setInputValue(value);
            return;
        }

        // Only allow digits
        if (!/^\d+$/.test(value)) return;

        // Prevent leading zeros (unless it's just "0")
        if (value.length > 1 && value.startsWith("0")) {
            value = value.replace(/^0+/, "");
        }

        setInputValue(value);
    };

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
                <button className={styles.less_button} onClick={() => decreaseClick(id)}>
                    -
                </button>
                <input
                    type="text"
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleChange(e, id);
                    }}
                    onBlur={(e) => handleChange(e, id)}
                />
                <button className={styles.more_button} onClick={() => increaseClick(id)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default CartProduct;
