import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import MapView from '../Components/mapView.js'
import GameMenu from '../Components/gameMenu.js'
import Lobby from '../Screens/lobby'
import LobbyMenu from '../Screens/LobbyMenu.js'



export default function Game({ navigation }) {
    return (

        <View>
            <LobbyMenu />
        </View>


    );
}

const styles = StyleSheet.create({

});
