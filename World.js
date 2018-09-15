import React from 'react';
import {Text, View, Dimensions, StatusBar, TouchableOpacity, Image} from 'react-native';
import {styles} from './Styles';

export default class World extends React.Component {
    constructor(){
        super();
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToMainView = this.goToMainView.bind(this);
    }

    goToMainView(){
        const {navigate} = this.props.navigation;
        navigate("HelloWorld");
    }

    render() {
        return (
            <View style={{backgroundColor:'#417aa1', flex:1}}>
                <View style={styles.worldMainContainer}>
                    <View style={styles.helloAndWorldHeader}>
                        <TouchableOpacity onPress={this.goToMainView}>
                            <Image style={styles.backButton} source={require('./icons/back-arrow.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.helloAndWorldMainView}>
                        <Text style={styles.texts}> Welt </Text>
                    </View>
                </View>
            </View>

        );
    }
}
