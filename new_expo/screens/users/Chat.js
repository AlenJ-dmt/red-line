import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Chat = props =>{
    return(
        <View style = {styles.screen}>
            <Text>
                Chat Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Chat;