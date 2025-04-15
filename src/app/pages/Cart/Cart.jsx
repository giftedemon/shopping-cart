import styles from "./Cart.module.css";
import CartProduct from "src/components/CartProduct/CartProduct";
import Loader from "src/components/Loader/Loader";
import useProductsData from "src/hooks/useProductsData";
import { useState, useEffect } from "react";

function Cart() {
    const { data, error, isLoading } = useProductsData();
    const [total, setTotal] = useState(100);
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("cart") || "{}"));

    return (
        <section>
            <h3 className={styles.cart_title}>Shopping Cart</h3>
            {isLoading ? (
                <Loader></Loader>
            ) : (
                <div className={styles.cart}>
                    <div className={styles.items}>
                        {data.map((item) => {
                            if (item.id in localData) {
                                return (
                                    <CartProduct
                                        key={item.key}
                                        image={item.images[0]}
                                        title={item.title}
                                        price={item.price}
                                        id={item.id}
                                        quantity={localData[item.id]}
                                    ></CartProduct>
                                );
                            }
                        })}
                    </div>
                    <div className={styles.buy}>
                        <h3 className={styles.buy_title}>Order summary</h3>
                        <div className={styles.buy_products}>
                            {data.map((item) => {
                                if (item.id in localData) {
                                    return (
                                        <div className={styles.buy_info}>
                                            <p>{item.title}</p>
                                            <p>x{localData[item.id]}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <p className={styles.buy_total}>Total: {total}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
