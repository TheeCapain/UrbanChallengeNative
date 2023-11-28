import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {SUPABASE_KEY} from '@env'

import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto';
const supabaseUrl = 'https://rkpqeyftddejgboqvwhh.supabase.co'
const supabaseKey = SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function LobbyMenu(props) {
    const navigation = useNavigation();

    const [points, onChangePoints] = useState(0)

    const [challenges, setChallenges] = useState()

    useEffect(() => {
        if (!challenges) {
            getChallenges()
        }
        async function getChallenges() {
            let { data: challenges, error } = await supabase
                .from('challenges')
                .select('*')
            setChallenges(challenges)
        }



    })

    return (
        <View style={styles.LobbyMenu}>
            <Text style={styles.headline}>Player Name here:{props.playerName}  </Text>
            <Text style={styles.headline}>Team Name here: {points}</Text>
            <Text style={styles.headline}>Active Card Here</Text>
            <Text style={styles.headline}>Timer here if any</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('cardsOverview',{cards: challenges})
                }}>
                    <Text style={styles.buttonText}>Cards</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('playerView')
                }} >
                    <Text style={styles.buttonText}>Scoreboard</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Shop')
                }}>
                    <Text style={styles.buttonText}>Shop</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    LobbyMenu: {
        height: "100%",
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
