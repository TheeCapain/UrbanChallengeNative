
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useEffect } from 'react';
import CardsView from './cardsView.js'
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto';
import { useState } from 'react';
const supabaseUrl = 'https://rkpqeyftddejgboqvwhh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcHFleWZ0ZGRlamdib3F2d2hoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODgzMzY3OSwiZXhwIjoyMDA0NDA5Njc5fQ.H9n9btArJqOacTFv0VpGk8HADSQO_8yVyCHEn-wFr1Y'
const supabase = createClient(supabaseUrl, supabaseKey)


export default function Test({ navigation }) {

    const [challenges, setChallenges] = useState()

    useEffect(() => {
        async function getChallenges() {
            let { data: challenges, error } = await supabase
                .from('challenges')
                .select('*')

            const newChallenges = challenges
            setChallenges(newChallenges)
        }
        getChallenges()
    }, [])
    console.log(challenges);
    console.log(challenges);

    return (
        <View style={styles.container}>
            <CardsView></CardsView>
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
