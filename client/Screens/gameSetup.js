
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function GameSetup() {
    const navigation = useNavigation();

    return (

        <View>
            <Text style={styles.headline}>Setup screen</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    headline: {
        fontWeight: 'bold',
        textTransform: "uppercase",
        color: 'white'
    },

});
