import { useState, useEffect } from "react";

import useProductsData from "src/hooks/useProductsData";
import styles from "./Homepage.module.css";
import ProductsList from "src/components/ProductsList/ProductsList";

function Homepage() {
    const { data, error, isLoading } = useProductsData(6);

    return (
        <>
            <section className={styles.homepage}>
                <h2 className={styles.title}>Welcome to Ayan Store</h2>
                <p className={styles.description}>Explore our amazing collection</p>
            </section>

            <section className={styles.featured}>
                <h3 className={styles.featured_title}>Our featured products</h3>
                <ProductsList data={data} isLoading={isLoading} error={error}></ProductsList>
            </section>
        </>
    );
}

export default Homepage;
