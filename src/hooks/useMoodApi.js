import { useState, useEffect } from 'react';
import axios from 'axios';

const useMoodApi = () => {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/user');
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
