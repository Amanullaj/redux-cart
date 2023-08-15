import React from 'react';
import {StyleSheet,} from 'react-native';
import Store from './components/Store';
import { Provider } from 'react-redux';
import Home from './components/Home';


const App = () => {
  return(
    <Provider store={Store}>
    <Home />
    </Provider>
  )
}

const styles = StyleSheet.create({

});

export default App;
