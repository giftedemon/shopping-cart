import { useState, useEffect } from "react";

import useProductsData from "src/hooks/useProductsData";
import Product from "src/components/Product/Product.jsx";
import Loader from "src/components/Loader/Loader.jsx";
import styles from "./ProductsList.module.css";

function ProductsList({ number }) {
    const { data, error, isLoading } = useProductsData(number);
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("cart") || "{}"));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(localData));
    }, [localData]);

    const addToCart = (id, price) => {
        setLocalData((prev) => ({ ...prev, [id]: { quantity: 1, price: price } }));
    };

    const deleteFromCart = (id) => {
        setLocalData((prev) => {
            const newObj = { ...prev };
            delete newObj[id];
            return newObj;
        });
    };

    return (
        <div className={styles.products_list}>
            {isLoading ? (
                <Loader></Loader>
            ) : (
                data.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.images[0]}
                            price={item.price}
                            handleClick={item.id in localData ? deleteFromCart : addToCart}
                            inCart={item.id in localData}
                            color={item.id in localData ? "red" : "green"}
                        ></Product>
                    );
                })
            )}
        </div>
    );
}

export default ProductsList;
