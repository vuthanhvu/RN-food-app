import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) => {
    const { navigation } = props;
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return <Text> No result found !!!</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                keyExtractor={photo => photo}
                data={result.photos}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{uri: item}} />
                    )
                }}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
    image: {
        width: 350,
        height: 200,
        marginBottom: 20
    }
});

export default ResultsShowScreen
