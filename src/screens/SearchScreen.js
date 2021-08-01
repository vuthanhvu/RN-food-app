import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (
        <ScrollView style={styles.container}>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            { errMessage ? <Text>{errMessage}</Text> : null }
            <ResultsList 
                title="Cost Effective"
                results={filterResultsByPrice('$')}
            />
            <ResultsList
                title="Bit Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList
                title="Big Spender"
                results={filterResultsByPrice('$$$')} 
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    }
})

export default SearchScreen
