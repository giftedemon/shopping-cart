import ProductsList from "src/components/ProductsList/ProductsList";
import styles from "./Products.module.css";

export default function Products() {
    return (
        <section className={styles.all_products}>
            <h3 className={styles.featured_title}>All products</h3>
            <ProductsList number={15}></ProductsList>
        </section>
    );
}
