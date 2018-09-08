import React from 'react';
import { Text, View, Dimensions, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {styles} from './Styles';
import HelloWorld from './HelloWorld';
import Hello from './Hello';
import World from './World';






// WARNING: ISMOUNTED IS DEPRECATED SHOWS UP, WHEN USING THIS. IS A BUG IN REACT-native.
// THIS IS A WORKAROUND, TO GET RID OF THE YELLOWBOX WARNING
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default createStackNavigator(
    {

        Home: HelloWorld,
        Hello: Hello,
        World: World,

    },
    {
        navigationOptions: {
               header: null
           }
    }
);
