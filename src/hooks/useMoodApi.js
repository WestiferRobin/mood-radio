import { useState, useEffect } from 'react';
import axios from 'axios';

const useMoodApi = () => {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const testId = "66c220ab-d26a-4cce-9c59-16d7f133a363";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/user/${testId}`);
                const user = response.data;
                setUsername(user.username);
                // setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { username, loading, error };
};

export default useMoodApi;
