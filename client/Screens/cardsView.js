import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function CardsOverview(props) {


    const navigation = useNavigation();
    const [cards, setCards] = useState(props.route.params.cards)

    console.log(cards);
    return (
        <View style={styles.container}>
            <Text style={styles.cardViewTitle}>Welcome to the Cards</Text>
            <FlatList
                data={cards}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.cardContent} onPress={() => navigation.navigate('card', { card: item })}>
                        <Text>{item.challenge_title}</Text>
                        <Text>{item.challenge_description}</Text>
                        <Text>{item.challenge_points}</Text>
                    </TouchableOpacity>
                }
            />
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
    cardViewTitle: {
        fontSize: 25,
        textAlign: "center",
        color: 'white',
    },
    cardContent: {
        backgroundColor: 'white',
        margin: 5,
        height: 100,
        width: 350,
        flexDirection: 'column',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,

    }
});
