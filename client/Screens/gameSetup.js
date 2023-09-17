
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Timer from '../Components/timer';

export default function GameSetup() {

    const [password, setPassword] = useState('')
    const [timer, setTimer] = useState('01:24')


    return (

        <View style={styles.container}>
            <Text style={styles.timer}>This is game setup</Text>
            <Timer></Timer>
            <View style={styles.input}>
                <TextInput
                    placeholder='Password'
                    value={password}
                />
            </View>
            <View>
                <Text>Allow Alcohol? BOX HERE</Text>
            </View>
            <View>
                <Text>Allow Spending money? BOX HERE</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity  >
                    <Text style={styles.buttonText}>Create Game</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#313638',
        alignItems: 'center',
    },
    timerContainer: {
        borderWidth: 1,
        width: '75%',
        height: 75,
        justifyContent: 'center'
    },
    timer: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32
    },
    input: {
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    }, buttonContainer: {
        elevation: 8,
        backgroundColor: "#386C0B",
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
