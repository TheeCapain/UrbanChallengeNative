import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react'
import MapView from "react-native-maps";

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
                //specify our coordinates.
                initialRegion={{
                    latitude: 55.676098,
                    longitude: 12.568337,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                //onRegionChangeComplete runs when the user stops dragging MapView
                onRegionChangeComplete={(region) => setRegion(region)}
            />


            {/*Display user's current region:*/}
            <Text style={styles.text}>Current latitude: {region.latitude}</Text>
            <Text style={styles.text}>Current longitude: {region.longitude}</Text>
        </View>

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
    },
});
