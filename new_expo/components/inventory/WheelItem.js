import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

const WheelItem = props => {
    return (
        <TouchableOpacity onPress={props.onViewDetail}>
            <View style={styles.wheel}>
                <View style={styles.wheelHeader}>
                    <Text style={styles.holl} >## {props.hollander}</Text>
                    <Text style={styles.loc} >Loc: {props.location}</Text>
                </View>
                <Image style={styles.img} source={{ uri: props.image }} />
                <View style={styles.action}>
                    <Button title="Details" onPress={props.onViewDetail} />
                    <Button title="RED" onPress={props.onRedView} />
                    <Button title= 'Delete' onPress={props.onDeleteView} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wheelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal: 10
    },
    wheel: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    img: {
        width: '100%',
        height: '60%'
    },
    holl: {
        fontSize: 18,
        marginVertical: 4
    },
    loc: {
        fontSize: 14
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 15

    }
})

export default WheelItem;