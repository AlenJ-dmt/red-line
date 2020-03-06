import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyBottomNavigator from './navigation/InventoryNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import wheelReducer from './inventory/reducers/Wheels'
import redLineReducer from './inventory/reducers/RedLine'

const rootReaducer = combineReducers({
  wheels : wheelReducer,
  redLine : redLineReducer
});

const store = createStore(rootReaducer);

export default function App() {
  return (
    <Provider store ={store}>
      <MyBottomNavigator></MyBottomNavigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
