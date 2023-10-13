import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Cards({ navigation }) {

    const [teams, setTeams] = useState([
        teamOne = {
            key: 1,
            title: 'team one',
            description: 'CardDescriptionOne',
            points: 200
        }, teamOne = {
            key: 2,
            title: 'team two',
            description: 'CardDescriptionTwo',
            points: 200
        }, teamOne = {
            key: 3,
            title: 'team Three',
            description: 'CardDescriptionThree',
            points: 200
        },
    ])


    return (
        <View style={styles.container}>
            <Text style={styles.cardViewTitle}>Welcome to the Cards</Text>
            <FlatList
                data={teams}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.cardTitle}>
                        <View style={styles.cardContent}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>Points: {item.points}</Text>
                        </View>
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
        flexDirection: 'column'
    }
});
