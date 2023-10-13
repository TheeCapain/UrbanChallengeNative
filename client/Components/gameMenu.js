
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function GameMenu() {
    const navigation = useNavigation();
    return (
        <View style={styles.MenuContainer}>
            <TouchableOpacity style={styles.menuButtons} onPress={() => {
                navigation.navigate('cardsOverview')
            }}>
                <Text style={styles.menuText}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons} onPress={() => {
                navigation.navigate('Shop')
            }}>
                <Text style={styles.menuText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons} onPress={() => {
                navigation.navigate('players')
            }}>
                <Text style={styles.menuText}>Players</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtons}>
                <Text style={styles.menuText}>Options</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({


});
