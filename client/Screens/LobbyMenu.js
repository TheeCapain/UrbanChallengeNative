import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';

export default function LobbyMenu({ navigation }) {
    return (
        <View >
            <Text>Game ID: #######</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TestScreen')
                }}>
                    <Text style={styles.buttonText}>Scoreboard</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TestScreen')
                }}>
                    <Text style={styles.buttonText}>Cards</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TestScreen')
                }}>
                    <Text style={styles.buttonText}>Shop</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TestScreen')
                }}>
                    <Text style={styles.buttonText}>misc</Text>
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
        justifyContent: 'center',
    },
    headline: {
        fontWeight: 'bold',
        textTransform: "uppercase",
        color: 'white'
    },
    input: {
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#758BFD",
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
