import { useState, useEffect } from 'react';
import axios from 'axios';
import { testId, testLibraryData } from '../../constants';

const useMoodApi = () => {
    const [user, setUser] = useState({username: "WestiferRobin"});
    const [userLibrary, setUserLibrary] = useState(testLibraryData);
    const filters = [];

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserInfo = async () => {
        // const response = await axios.get(`/user/${testId}`);
        // const user = response.data;
        // setUser(user);
    };

    const fetchUserLibrary = async () => {
        // const payload = {
        //     id: testId,
        //     filters: filters
        // };
        // const response = await axios.get(`/user/library`, payload);
        // const library = response.data;
        // setUserLibrary(library);
    };

    useEffect(() => {
        try {
            // fetchUserInfo();
            // fetchUserLibrary();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [fetchUserInfo, fetchUserLibrary]);

    return { user, userLibrary, loading, error };
};

export default useMoodApi;
