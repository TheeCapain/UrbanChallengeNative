
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function GameMenu() {

    const navigation = useNavigation();
    return (
        <View style={styles.MenuContainer}>
            <TouchableOpacity style={styles.menuButtons} onPress={() => {
                navigation.navigate('cards')
            }}>
                <Text style={styles.menuText}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons} onPress={() => {
                navigation.navigate('Shop')
            }}>
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
