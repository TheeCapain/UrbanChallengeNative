
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

import Shop from './shop.js'

export default function Test({ navigation }) {



    return (
        <View style={styles.container}>
            <Shop></Shop>
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
