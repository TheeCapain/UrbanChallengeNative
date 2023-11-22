import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import GameMenu from '../Components/gameMenu'



export default function Game({ navigation, route }) {
    return (


        <View>
            <GameMenu playerName={route.params.player}/>
        </View>




    );
}

const styles = StyleSheet.create({

});
