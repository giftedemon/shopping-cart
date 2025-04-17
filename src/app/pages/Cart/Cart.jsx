import styles from "./Cart.module.css";
import CartProduct from "src/components/CartProduct/CartProduct";
import Loader from "src/components/Loader/Loader";
import useProductsData from "src/hooks/useProductsData";
import { useState, useEffect } from "react";
import { CiCreditCard1 } from "react-icons/ci";

function Cart() {
    const { data, error, isLoading } = useProductsData();
    const [total, setTotal] = useState(100);
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("cart") || "{}"));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(localData));
        let newTotal = 0;
        for (const [key, value] of Object.entries(localData)) {
            newTotal += value.quantity * value.price;
        }
        setTotal(newTotal);
    }, [localData]);

    const increaseClick = (id) => {
        setLocalData((prev) => ({
            ...prev,
            [id]: { quantity: prev[id].quantity + 1, price: prev[id].price },
        }));
    };

    const decreaseClick = (id) => {
        setLocalData((prev) => {
            if (prev[id].quantity > 1)
                return {
                    ...prev,
                    [id]: { quantity: prev[id].quantity - 1, price: prev[id].price },
                };

            const newObj = { ...prev };
            delete newObj[id];
            return newObj;
        });
    };

    const handleChange = (e, id) => {
        setLocalData((prev) => {
            if (Number(e.target.value) >= 1)
                return {
                    ...prev,
                    [id]: { quantity: Number(e.target.value), price: prev[id].price },
                };

            const newObj = { ...prev };
            delete newObj[id];
            return newObj;
        });
    };

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
                                        key={item.id}
                                        image={item.images[0]}
                                        title={item.title}
                                        price={item.price}
                                        id={item.id}
                                        quantity={localData[item.id].quantity}
                                        decreaseClick={decreaseClick}
                                        increaseClick={increaseClick}
                                        handleChange={handleChange}
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
                                        <div key={item.id} className={styles.buy_info}>
                                            <p>{item.title}</p>
                                            <p>x{localData[item.id].quantity}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <p className={styles.buy_total}>Total: ${total}</p>
                        <button className={styles.checkout}>
                            <CiCreditCard1 size={50} />
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
