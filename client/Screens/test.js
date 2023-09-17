
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Timer from '../Components/timer';
import Game from './game'
export default function Test({ navigation }) {



    return (
        <View style={styles.container}>
            <Game/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313638',
        alignItems: 'center',
    },
});