import { useState, useEffect } from "react";
import axios from 'axios';

const useSearchApi = () => {
    const [artists, setArtists] = useState([]);

    const fetchAll = async () => {
        // const response = await axios.get('search/artists');
        // const data = response.data;
        // setArtists(data);
        const asdf = [];
        for (let index = 0; index < 100; index += 1)
        {
            asdf.push({name: `artist ${index}`});
        }
        setArtists(asdf);
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

