import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetail = (props) => {
    const { result } = props;
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    image: {
        height: 120,
        width: 200,
        borderRadius: 4,
    },
    name: {
        fontSize: 15,
        fontWeight: '600'
    }
})

export default ResultDetail
