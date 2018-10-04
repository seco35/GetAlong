import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity, TouchableHighlight, StatusBar} from 'react-native';
import {styles} from './Styles';
import MapView, {Polyline, Polygon, Circle} from 'react-native-maps';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

export default class HomeScreen extends React.Component {


    constructor(props){
        super(props);
        this.state= {
            urlTemplate: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
            region: {
                    latitude: 53.055091,
                    longitude: 8.783525,
                    latitudeDelta: 0.0012, //5
                    longitudeDelta: 0.0004, // 2
            },
        }
        this.screenHeight = Dimensions.get("window").height;
        this.screenWidth = Dimensions.get("window").width;
        this.goToMainView = this.goToMainView.bind(this);
        this.myCoordinates = [
            [ { latitude:53.055079,longitude: 8.783280},{ latitude:53.055048,longitude: 8.783292},{ latitude:53.055059,longitude: 8.783368},{ latitude:53.05509,longitude: 8.78336} ],
            [ { latitude:53.055048,longitude: 8.783292},{ latitude:53.055016,longitude: 8.783303},{ latitude:53.055029,longitude: 8.783380},{ latitude:53.055059,longitude: 8.783368} ],
            [ { latitude:53.055016,longitude: 8.783303},{ latitude:53.05498,longitude: 8.78332},{ latitude:53.054995,longitude: 8.783397},{ latitude:53.055029,longitude: 8.783380} ],
            [ { latitude:53.05498,longitude: 8.78332},{ latitude:53.05495,longitude: 8.783335},{ latitude:53.05497,longitude: 8.78341},{ latitude:53.054995,longitude: 8.783397}],
            [ { latitude:53.05495,longitude: 8.783335},{ latitude:53.05492,longitude: 8.783355},{ latitude:53.05494,longitude: 8.78343},{ latitude:53.05497,longitude: 8.78341} ],
            [ { latitude:53.05492,longitude: 8.783355},{ latitude:53.05489,longitude: 8.78338},{ latitude:53.054910,longitude: 8.783447},{ latitude:53.05494,longitude: 8.78343} ],
            [ { latitude:53.05489,longitude: 8.78338}, { latitude:53.05486,longitude: 8.7834},{ latitude:53.05488,longitude: 8.78347},{ latitude:53.054910,longitude: 8.783447}],
            [ { latitude:53.05486,longitude: 8.7834}, { latitude:53.054785,longitude: 8.783469}, { latitude:53.05474,longitude: 8.78352},{ latitude:53.05477,longitude: 8.78359},{ latitude:53.05488,longitude: 8.78347} ],
            [ { latitude:53.05464,longitude: 8.78366},{ latitude:53.05462,longitude: 8.78369},{ latitude:53.054652,longitude: 8.783738},{ latitude:53.05467,longitude: 8.78371} ],
            [ { latitude:53.05462,longitude: 8.78369},{ latitude:53.054591,longitude: 8.783734},{ latitude:53.054626,longitude: 8.783789},{ latitude:53.054652,longitude: 8.783738} ],
            [ { latitude:53.054702,longitude: 8.783896}, { latitude:53.054749,longitude: 8.783813}, { latitude:53.054792,longitude: 8.783749},{ latitude:53.054755,longitude: 8.783668}, { latitude:53.054702,longitude: 8.783746},{ latitude:53.054654,longitude: 8.783826} ],
            [ { latitude:53.054896,longitude: 8.783708},{ latitude:53.05494,longitude: 8.78367},{ latitude:53.05489,longitude: 8.7835},{ latitude:53.054867,longitude: 8.783521},{ latitude:53.05489,longitude: 8.78359},{ latitude:53.05486,longitude: 8.78362} ],
            [ { latitude:53.05494,longitude: 8.78367}, { latitude:53.055033,longitude: 8.783612},{ latitude:53.055100,longitude: 8.783588},{ latitude:53.055099,longitude: 8.783467},{ latitude:53.055000,longitude: 8.783510},{ latitude:53.054994,longitude: 8.783443},{ latitude:53.05489,longitude: 8.7835} ],
            [ { latitude:53.055199,longitude: 8.783574},{ latitude:53.055291,longitude: 8.783577},{ latitude:53.055374,longitude: 8.783604},{ latitude:53.055407,longitude: 8.783440},{ latitude:53.055336,longitude: 8.783418},{ latitude:53.055323,longitude: 8.783476},{ latitude:53.055218,longitude: 8.783460} ],
            [ { latitude:53.055376,longitude: 8.783606},{ latitude:53.05546,longitude: 8.78365},{ latitude:53.05551,longitude: 8.78349},{ latitude:53.05541,longitude: 8.78344} ],
            [ { latitude:53.05546,longitude: 8.78365},{ latitude:53.05555,longitude: 8.78372},{ latitude:53.05561,longitude: 8.78359},{ latitude:53.05551,longitude: 8.78349} ],
            [ { latitude:53.05555,longitude: 8.78372},{ latitude:53.05555,longitude: 8.78372}, { latitude:53.055630,longitude: 8.783815},{ latitude:53.055695,longitude: 8.783695},{ latitude:53.05561,longitude: 8.78359} ],
            [ { latitude:53.055753,longitude: 8.783580}, { latitude:53.055697,longitude: 8.783507},{ latitude:53.055666,longitude: 8.783596},{ latitude:53.055713,longitude: 8.783660} ],
            [ { latitude:53.055695,longitude: 8.783504},{ latitude:53.055655,longitude: 8.783462},{ latitude:53.055635,longitude: 8.783550},{ latitude:53.055666,longitude: 8.783596} ],
            [ { latitude:53.055571,longitude: 8.783386},{ latitude:53.055514,longitude: 8.783346},{ latitude:53.055462,longitude: 8.783317},{ latitude:53.055450,longitude: 8.783386},{ latitude:53.055555,longitude: 8.783445} ],
            [ { latitude:53.055460,longitude: 8.783314},{ latitude:53.055413,longitude: 8.783297},{ latitude:53.055408,longitude: 8.783370},{ latitude:53.055448,longitude: 8.783384} ],
            [ { latitude:53.055411,longitude: 8.783297},{ latitude:53.055340,longitude: 8.783275},{ latitude:53.05534,longitude: 8.78335},{ latitude:53.055407,longitude: 8.783369} ],
            [ { latitude:53.055340,longitude: 8.783275}, { latitude:53.055281,longitude: 8.783264},{ latitude:53.05528,longitude: 8.78334},{ latitude:53.05534,longitude: 8.78335} ],
            [ { latitude:53.05521,longitude: 8.78326},{ latitude:53.055125,longitude: 8.783268},{ latitude:53.055080,longitude: 8.783280},{ latitude:53.05509,longitude: 8.78336},{ latitude:53.055206,longitude: 8.783335} ]
        ];
        // this.myCoordinates = [[{ latitude: 53.055530, longitude: 8.781675},{ latitude: 53.055127, longitude: 8.781182},{ latitude: 53.055365, longitude: 8.780812}],[{ latitude: 53.055530, longitude: 8.782008},{ latitude: 53.055514, longitude: 8.782507},{ latitude: 53.055156, longitude: 8.782265},{ latitude: 53.055201, longitude: 8.781949}],[{ latitude: 53.055540, longitude: 8.782888},{ latitude: 53.055517, longitude: 8.783639},{ latitude: 53.055072, longitude: 8.782743},{ latitude: 53.055065, longitude: 8.783188},{ latitude: 53.054826, longitude: 8.782871}],[{ latitude: 53.055546, longitude: 8.784003},{ latitude: 53.055430, longitude: 8.784529},{ latitude: 53.054914, longitude: 8.784298},{ latitude: 53.054930, longitude: 8.783628},{ latitude: 53.055243, longitude: 8.783601},{ latitude: 53.055469, longitude: 8.783698}]]

    }

    goToMainView(){
        const {navigate} = this.props.navigation;
        navigate("Home");
    }

    loadMap(){
        let myPolyArray = this.myCoordinates.map( (s,i) => {
            return(
                <Polygon key={i}
                    coordinates= {s}
                    strokeColor="#47b3ff"
                    strokeWidth={0.5}
                    fillColor = "rgba(126,192,238,0.4)"
                />
            );
        } );
        return myPolyArray;
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:'skyblue'}}>
                <StatusBar hidden/>
                <View style={{flex:1, backgroundColor:'red'}}>

                    <MapView
                    style={styles.map}
                    region={this.state.region}
                    >
                        {this.loadMap()}
                    </MapView>




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
