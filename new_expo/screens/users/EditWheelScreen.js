import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as wheelActions from '../../inventory/actions/Wheels'

const EditWheelScreen = props =>{
    return(
        <View style = {styles.screen}>
            <Text>
                This is the second screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default EditWheelScreen;