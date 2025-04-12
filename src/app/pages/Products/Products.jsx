import { useState, useEffect } from "react";

import useProductsData from "src/hooks/useProductsData";
import ProductsList from "src/components/ProductsList/ProductsList";
import styles from "./Products.module.css";

export default function Products() {
    const { data, error, isLoading } = useProductsData(15);

    return (
        <section className={styles.all_products}>
            <h3 className={styles.featured_title}>All products</h3>
            <ProductsList data={data} isLoading={isLoading} error={error}></ProductsList>
        </section>
    );
}
