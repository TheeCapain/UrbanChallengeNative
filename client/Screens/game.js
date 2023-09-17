import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import MapView from '../Components/mapView.js'
import GameMenu from '../Components/gameMenu.js'



export default function Game({ navigation }) {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });


    return (
        <View style={styles.container}>

            <View><Text>This is the game screen</Text></View>
            <MapView />

            <GameMenu />

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

});
