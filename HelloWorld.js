import React from 'react';
import {Text, View, Dimensions, StatusBar, TouchableOpacity, TouchableHighlight} from 'react-native';
import {styles} from './Styles';

export default class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToHello = this.goToHello.bind(this);
        this.goToWorld = this.goToWorld.bind(this);
    }

    goToHello(){
        const {navigate} = this.props.navigation;
        navigate("Hello");
    }
    goToWorld(){
        const {navigate} = this.props.navigation;
        navigate("World");
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden/>
                <TouchableHighlight style={[styles.myViews, {backgroundColor:'skyblue'}]} onPress={this.goToHello}>
                    <Text style={styles.texts}> Hallo </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.myViews, {backgroundColor:'#417aa1'}]} onPress={this.goToWorld}>
                    <Text style={styles.texts}> Welt </Text>
                </TouchableHighlight>
            </View>

        );
    }
}
