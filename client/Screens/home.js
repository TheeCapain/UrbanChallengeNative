import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Home({ navigation }) {
    const [text, onChangeText] = useState('')
    return (


        <View style={styles.container}>
            <View>
                <Text style={styles.headline}>True Dane: The game</Text>
            </View>


            <View style={styles.input}>
                <TextInput
                    placeholder='Enter Game ID'
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity  >
                    <Text style={styles.buttonText}>Join Game</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Setup')
                }} >
                    <Text style={styles.buttonText}>Create Game</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
