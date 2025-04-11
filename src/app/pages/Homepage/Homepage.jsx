import styles from "./Homepage.module.css";
import Product from "src/components/Product/Product";

function Homepage() {
    return (
        <>
            <section className={styles.homepage}>
                <h2 className={styles.title}>Welcome to Ayan Store</h2>
                <p className={styles.description}>Explore our amazing collection</p>
            </section>

            <section className={styles.featured}>
                <h3 className={styles.featured_title}>Our featured products</h3>
                <div className={styles.products}>
                    <Product></Product>
                    <Product></Product>
                </div>
            </section>
        </>
    );
}

export default Homepage;
