import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
    const { term, onTermChange, onTermSubmit } = props;

    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        color: 'red',
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar
