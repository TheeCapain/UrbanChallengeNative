import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function LobbyMenu() {
    const navigation = useNavigation();
    const [text, onChangeText] = useState('')
    return (
        <View style={styles.LobbyMenu}>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('cardsOverview')
                }}>
                    <Text style={styles.buttonText}>Cards</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('playerView')
                }} >
                    <Text style={styles.buttonText}>Scoreboard</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Shop')
                }}>
                    <Text style={styles.buttonText}>Shop</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    LobbyMenu: {
        height: "100%",
        backgroundColor: '#313638',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headline: {
        fontWeight: 'bold',
        textTransform: "uppercase",
        color: 'white'
    },
    input: {
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#758BFD",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '50%',
        textAlign: 'center',
        margin: 5
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
