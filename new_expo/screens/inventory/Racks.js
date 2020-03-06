import * as React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import{useSelector, useDispatch} from 'react-redux';
import WheelItem from '../../components/inventory/WheelItem';
import HeaderButton from '../../components/UI/HeaderButton';
import * as productActions from '../../inventory/actions/Wheels';
import * as redLineActions from '../../inventory/actions/RedLine';

const Racks = props => {

    const wheels = useSelector(state => state.wheels.availableWheels);
    const dispatch =  useDispatch();



    const editProductHandler = (id) =>{
        props.navigation.navigate('EditWheelScreen', {wheelId: id});
    };

    return(
        <FlatList
        data = {wheels}
        renderItem ={itemData => <WheelItem
        image = {itemData.item.imageUrl}
        hollander = {itemData.item.hollander}
        location = {itemData.item.location}
        onViewDetail = {() => {
            props.navigation.navigate('details',{
                wheelId: itemData.item.id,
                wheelHollander: itemData.item.hollander
            })
        }}
        onEditView = {() => {
            editProductHandler(itemData.item.id)
        }}
        onRedView = {() => {
            dispatch(redLineActions.addToRedLine(itemData.item));
        }}
        onDeleteView ={() => {
            dispatch(productActions.deleteProduct(itemData.item.id))
        }}
        /> }
        >

        </FlatList>

    );
};

export const screenOptions = navData =>{
    return{
        headerTitle: 'Racks',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                <Item 
                title = "Add Item"
                iconName = "md-add-circle-outline"
                onPress = {() => {
                    navData.navigation.navigate('add')
                }}
                />
            </HeaderButtons>
        )   
    };
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Racks;