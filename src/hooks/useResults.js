import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(res.data.businesses);
        } catch (err) {
            setErrMessage('Something went wrong!');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMessage];
}

