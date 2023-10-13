
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

import Shop from './shop.js'
import PlayerView from './playerView.js'

export default function Test({ navigation }) {



    return (
        <View style={styles.container}>
           <PlayerView/>
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
