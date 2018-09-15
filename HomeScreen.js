import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, TouchableHighlight, StatusBar} from 'react-native';
import {styles} from './Styles';
import MapView from 'react-native-maps';
import { UrlTile } from 'react-native-maps';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            urlTemplate: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
            region: {
                    latitude: 53.125028,
                    longitude: 8.760105,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
            },
        }
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
            <View style={{flex:1, backgroundColor:'skyblue'}}>
                <StatusBar hidden/>
                <View style={{flex:1, backgroundColor:'red'}}>

                    <MapView
                    style={styles.map}
                    region={this.state.region}
                    />




                    {/*<MapView
                    style={styles.map}
                    initialRegion={this.state.region}
                    >
                        <UrlTile urlTemplate="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapView>*/}


                </View>

            </View>

        );
    }
}
