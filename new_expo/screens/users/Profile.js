import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const Profile = props =>{
    return(
        <View style = {styles.screen}>
            <Text>
                Profile screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile;