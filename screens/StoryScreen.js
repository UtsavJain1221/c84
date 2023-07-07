import React from 'react';
import {
    View,
    Text,
    Stylesheets,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimension,
    TouchableOpacity} from 'react-native'
import RFValue from 'react-native-responsive-FontSize';
import IonIcons from 'react-native-vector-Icons/IonIcons';
import * as Speech from "expo-speech";

export default class StoryScreen extends Component{
Constructor(props){
    super(props);
    this.state = {
        FontsLoaded:false,
        SpeakerColor:"Grey",
        SpeakerICon:"Volume-high-outline"
    };
}
async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }



}