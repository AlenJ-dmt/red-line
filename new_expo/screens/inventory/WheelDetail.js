import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { useSelector } from 'react-redux'

const WheelDetail = props => {

    const wheelId = props.route.params.wheelId;
    const selectedWheel = useSelector(state =>
        state.wheels.availableWheels.find(wheel => wheel.id === wheelId))

    return (
        <View>
            <Image
                style={styles.img}
                source={{ uri: selectedWheel.imageUrl }} />
            <View >
                <Text style={styles.text}>Hollander: {selectedWheel.hollander}</Text>
                <Text style={styles.text}>Location: {selectedWheel.location}</Text>
                <Text style={styles.text}>Size: {selectedWheel.size}</Text>
                <Text style={styles.text}>Bolt BoltPattern: {selectedWheel.boltPattern}</Text>
            </View>
            
        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerTitle: navData.route.params.wheelHollander
    };
};

const styles = StyleSheet.create({
    img: {
        height: 400,
        width: '100%',
        margin: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
})

export default WheelDetail;