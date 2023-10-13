import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import MapView from "react-native-maps";
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
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 55.676098,
                    longitude: 12.568337,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={(region) => setRegion(region)}
            />
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
