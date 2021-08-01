import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultDetail from './ResultDetail';

const ResultsList = (props) => {
    const { title, results, navigation } = props;

    if (results.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                    
                }}
            />
            {results.length === 0 ? <Text> No product </Text>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15,
    },
    title: {
        fontSize: 20,
        color: 'red',
        fontWeight: "500",
        marginBottom: 5
    }
})
export default withNavigation(ResultsList)
