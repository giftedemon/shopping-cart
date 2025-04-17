import { useState, useEffect } from "react";
import styles from "./Homepage.module.css";
import ProductsList from "src/components/ProductsList/ProductsList";

function Homepage() {
    return (
        <>
            <section className={styles.homepage}>
                <h2 className={styles.title}>Welcome to Jojo Store</h2>
                <p className={styles.description}>Explore our amazing collection</p>
            </section>

            <section className={styles.featured}>
                <h3 className={styles.featured_title}>Our featured products</h3>
                <ProductsList number={6}></ProductsList>
            </section>
        </>
    );
}

export default Homepage;
