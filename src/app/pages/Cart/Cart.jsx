import styles from "./Cart.module.css";
import Product from "src/components/Product/Product";
import useProductsData from "src/hooks/useProductsData";
import { useState, useEffect } from "react";

function Cart() {
    const { data, error, isLoading } = useProductsData();
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("cart") || "{}"));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(localData));
    }, [localData]);

    return (
        <section className={styles.cart}>
            <div className={styles.items}>
                {data.map((item) => {
                    if (item.id in localData) {
                        return (
                            <Product
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.images[0]}
                                price={item.price}
                                // handleClick={item.id in localData ? deleteFromCart : addToCart}
                                // inCart={item.id in localData}
                            ></Product>
                        );
                    }
                })}
            </div>
            <div className={styles.buy}></div>
        </section>
    );
}

export default Cart;
