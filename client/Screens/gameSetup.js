
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Timer from '../Components/timer';
import { CheckBox } from '@rneui/base';

export default function GameSetup({ navigation }) {

    const [password, setPassword] = useState('')
    const [alcoholChecked, setAlcoholChecked] = useState(true);
    const toggleAlcoholCheckbox = () => setAlcoholChecked(!alcoholChecked);

    const [moneyChecked, setMoneyChecked] = useState(true);
    const toggleMoneyCheckbox = () => setMoneyChecked(!moneyChecked);


    return (
        <View style={styles.container}>
            <Text style={styles.timer}>This is game setup</Text>
            <Timer></Timer>
            <View style={styles.input}>
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View >
                <CheckBox
                    center
                    title="Allow Alcohol"
                    textStyle={{ color: 'white' }}
                    checked={alcoholChecked}
                    onPress={() => toggleAlcoholCheckbox()}
                    containerStyle={styles.CheckBox}
                    iconRight={true}
                    checkedColor='red'
                />
            </View>
            <View >
                <CheckBox
                    center
                    title="Allow Money"
                    textStyle={{ color: 'white' }}
                    checked={moneyChecked}
                    onPress={() => toggleMoneyCheckbox()}
                    containerStyle={styles.CheckBox}
                    iconRight={true}
                    checkedColor='red'
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                
                    navigation.replace('Game')

                }}>
                    <Text style={styles.buttonText}>Create game</Text>
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
        width: 203,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    CheckBox: {
        backgroundColor: '#495159',
        width: 200,
    },

    buttonContainer: {
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
