import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import MapView from '../Components/mapView.js'
import GameMenu from '../Components/gameMenu.js'



export default function Game({ navigation }) {
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
