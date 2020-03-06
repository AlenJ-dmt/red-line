import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomtapNavigator, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native'

import Racks, { screenOptions as racksScreenOptions } from '../screens/inventory/Racks';
import WheelDetail, { screenOptions as detailScreenOptions } from '../screens/inventory/WheelDetail';
import AddWheel from '../screens/inventory/AddWheel';
import EditWheelScreen from '../screens/users/EditWheelScreen';
import colors from '../constants/colors';
import Profile from '../screens/users/Profile'
import Notification from '../screens/users/NotificationScreen'
import RedLine from '../screens/inventory/RedLine'
import Chat from '../screens/users/Chat';



const MyChatStack = createStackNavigator();
const MyRedLineStack = createStackNavigator();
const MyNotificationStack = createStackNavigator();
const MyWheelStack = createStackNavigator();
const MyBottomNav = createBottomTabNavigator();
const MyProfileStack = createStackNavigator();

const defaultOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
}

const ChatStack = props => {
    return (
        <MyChatStack.Navigator>
            <MyChatStack.Screen
                name='Chat'
                component={Chat}
            />
        </MyChatStack.Navigator>
    );
};

const RedLineStack = props => {
    return (
        <MyRedLineStack.Navigator>
            <MyRedLineStack.Screen
                name='red line'
                component={RedLine}
            />
        </MyRedLineStack.Navigator>
    );
};

const NotificationStack = props => {
    return (
        <MyNotificationStack.Navigator>
            <MyNotificationStack.Screen
                name='notification'
                component={Notification}
            />
        </MyNotificationStack.Navigator>
    );
};

const ProfileStack = props => {
    return (
        <MyProfileStack.Navigator>
            <MyProfileStack.Screen
                name='profile'
                component={Profile}
            />
        </MyProfileStack.Navigator>
    );
};

const WheelStack = props => {
    return (

        <MyWheelStack.Navigator>
            <MyWheelStack.Screen
                name="racks"
                component={Racks}
                options={racksScreenOptions}
            />
            <MyWheelStack.Screen
                name="details"
                component={WheelDetail}
                options={detailScreenOptions}
            />
            <MyWheelStack.Screen
                name="add"
                component={AddWheel}
            />
        </MyWheelStack.Navigator>
    );
};

const MyBottomNavigator = props => {
    return (
        <NavigationContainer>
            <MyBottomNav.Navigator>
                <MyBottomNav.Screen
                    name='Profile'
                    component={ProfileStack}
                />
                <MyBottomNav.Screen
                    name="Inventory"
                    component={WheelStack}
                />
                <MyBottomNav.Screen
                    name='Chat'
                    component={ChatStack}
                />
                <MyBottomNav.Screen
                    name='Notifications'
                    component={NotificationStack}
                />
                <MyBottomNav.Screen
                    name='Red Line'
                    component={RedLineStack}
                />

            </MyBottomNav.Navigator>
        </NavigationContainer>


    );
};

export default MyBottomNavigator;