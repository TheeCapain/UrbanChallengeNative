import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Cards({ navigation }) {
    const [cards, setCards] = useState([
        cardOne = {
            key: 1,
            title: 'TitleCardOne',
            description: 'CardDescriptionOne',
            points: 100
        }, cardOne = {
            key: 2,
            title: 'TitleCardTwo',
            description: 'CardDescriptionTwo',
            points: 200
        }, cardOne = {
            key: 3,
            title: 'TitleCardThree',
            description: 'CardDescriptionThree',
            points: 300
        },
    ])


    return (
        <View style={styles.container}>
            <Text style={styles.cardViewTitle}>Welcome to the Cards</Text>
            <FlatList
                data={cards}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.cardContent} onPress={() => navigation.navigate('card', { card: item })}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.points}</Text>
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
