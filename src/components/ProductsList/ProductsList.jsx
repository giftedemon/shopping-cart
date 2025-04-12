import Product from "src/components/Product/Product";
import styles from "./ProductsList.module.css";

function ProductsList({ data, error, isLoading }) {
    return (
        <div className={styles.products_list}>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                data.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            title={item.title}
                            image={item.images[0]}
                            price={item.price}
                        ></Product>
                    );
                })
            )}
        </div>
    );
}

export default ProductsList;
