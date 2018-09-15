import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';



let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    helloMainContainer:{
        flex:1,
        backgroundColor:'skyblue',
    },
    worldMainContainer:{
        flex:1,
        backgroundColor:'#417aa1',
    },
    helloAndWorldHeader:{
        flex:1,
        alignItems:'flex-end',
        padding:20
    },
    backButton:{
        width: screenWidth/10,
        height: screenHeight/10,
        resizeMode:'center',
    },
    helloAndWorldMainView:{
        flex:20,
        justifyContent:'center',
        alignItems:'center'
    },
    myViews:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts:{
        color:'#fff',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: screenHeight,
    },
});
