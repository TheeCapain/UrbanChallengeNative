import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function PlayerSetup() {
    const navigation = useNavigation();
    const [name, onChangeName] = useState('')
    return (
        <View style={styles.LobbyMenu}>
            <View>
                <Text style={styles.headline}>Enter your name</Text>
            </View>
            <View style={styles.input}>
      
                <TextInput
                    placeholder='Enter player name'
                    onChangeText={onChangeName}
                    value={name}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.replace('Game', { player: name })
                }}>
                    <Text style={styles.buttonText}>Join Game</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
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
