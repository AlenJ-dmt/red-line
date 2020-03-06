import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const RedLineItem = props => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{props.title}</Text>
                <Text> {props.hollander}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        margin: 20

    }
})

export default RedLineItem;