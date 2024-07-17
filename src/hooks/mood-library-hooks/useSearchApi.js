import { useState, useEffect } from "react";
import axios from 'axios';

const useSearchApi = () => {
    const [artists, setArtists] = useState([]);

    const fetchAll = async () => {
        const response = await axios.get('search/artists');
        const data = response.data;
        setArtists(data);
    };

    useEffect(() => {
        try {
            fetchAll();
        } catch (err) {
            console.error(err);
        }
    }, [fetchAll]);

    return { artists };

};

export default useSearchApi;

