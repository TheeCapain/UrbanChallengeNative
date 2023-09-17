
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Timer from '../Components/timer';

export default function Test({ navigation }) {



    return (
        <View style={styles.container}>
            <Text>This is for testing components</Text>
            <Timer/>
            <Text>This is for texting components</Text>
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
