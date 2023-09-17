
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

export default function Test({ navigation }) {
    return (
        <View style={styles.MenuContainer}>
            <TouchableOpacity style={styles.menuButtons}>
                <Text style={styles.menuText}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons}>
                <Text style={styles.menuText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons}>
                <Text style={styles.menuText}>Players</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons}>
                <Text style={styles.menuText}>Options</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    MenuContainer: {
        flexDirection: 'row',
        flex: 1,
        position: 'absolute',
        bottom: 0,
        height: 75
    },
    menuButtons: {
        borderColor: 'black',
        backgroundColor: "#758BFD",
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '25%',
        justifyContent: 'center',

    },
    menuText: {
        color: 'white',
        textAlign: 'center',


    }
});
