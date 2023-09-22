import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Cards({ navigation }) {

    const [cards, setCards] = useState([
        cardOne = {
            key: 1,
            title: 'TitleCardOne',
            description: 'CardDescriptionOne',
            points: 200
        }, cardOne = {
            key: 2,
            title: 'TitleCardTwo',
            description: 'CardDescriptionTwo',
            points: 200
        }, cardOne = {
            key: 3,
            title: 'TitleCardOne',
            description: 'CardDescriptionThree',
            points: 200
        },
    ])


    return (
        <View style={styles.container}>
            <Text style={styles.cardViewTitle}>Welcome to the Cards</Text>
            <FlatList
            
                data={cards}
                renderItem={({ item }) =>
                    <View style={styles.cardContent}>
                        <TouchableOpacity style={styles.cardTitle}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.points}</Text>
                        </TouchableOpacity>
                    </View>

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
        height:100,
        width:350,
        flexDirection:'column'
    }
  


});
