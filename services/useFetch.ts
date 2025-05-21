import { useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {

        }
        catch(err) {

        }
        finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }
};

