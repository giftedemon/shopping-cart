import Product from "src/components/Product/Product";
import styles from "./Products.module.css";

export default function Products() {
    return (
        <section className={styles.all_products}>
            <h3 className={styles.featured_title}>All products</h3>
            <div className={styles.products_list}>
                <Product></Product>
                <Product></Product>
            </div>
        </section>
    );
}
