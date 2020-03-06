import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import RedLineItem from '../../components/inventory/RedLineItem';

const RedLine = props => {

    const redlineItems = useSelector(state => {
        const transformedRedlineItems = [];
        for (const key in state.redLine.items) {
            transformedRedlineItems.push({
                productId: key,
                productHollander: state.redLine.items[key].productHollander,
                productImg: state.redLine.items[key].productHollander
            });
        }
        return transformedRedlineItems;
    })

    return (
        <View style={styles.screen}>
            <FlatList
                data={redlineItems}
                keyExtractor={item => item.productId}
                render={itemData => 
                <RedLineItem
                    title ={itemData.item.title}
                    hollander={itemData.item.hollander}
                />}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RedLine;