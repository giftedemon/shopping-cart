import { useState, useEffect } from "react";

export default function useProductsData(limit = 15) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const gettingData = async () => {
            try {
                const response = await fetch(
                    `https://api.escuelajs.co/api/v1/products?offset=0&limit=${limit}`,
                    {
                        signal: controller.signal,
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const postData = await response.json();
                setData(postData);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Aborted");
                    return;
                }
                setError(err.message);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        gettingData();

        return () => controller.abort();
    }, [limit]);

    return { data, error, isLoading };
}
