import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import {styles} from './Styles';

export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToMainView = this.goToMainView.bind(this);

    }

    goToMainView(){
        const {navigate} = this.props.navigation;
        navigate("Home");
    }
    render() {
        return (
            <View style={styles.helloMainContainer}>
                <View style={styles.helloAndWorldHeader}>
                    <TouchableOpacity onPress={this.goToMainView}>
                        <Image style={styles.backButton} source={require('./icons/back-arrow.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.helloAndWorldMainView}>
                    <Text style={styles.texts}> Hallo </Text>
                </View>
            </View>

        );
    }
}
