import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Cards({ navigation }) {
    const [teams, setTeams] = useState([
        teamOne = {
            key: 1,
            teamTitle: 'TeamOne',
        }, teamTwo = {
            key: 2,
            teamTitle: 'TeamTwo',
        }
    ])

    const [players, setPlayers] = useState([
        player = {
            key: 1,
            name: 'August',
            team: 1
        },
        player = {
            key: 2,
            name: 'Jannik',
            team: 1
        },
        player = {
            key: 3,
            name: 'Ralle',
            team: 2
        },
        player = {
            key: 4,
            name: 'Frej',
            team: 2
        }
    ])


    return (
        <View style={styles.container}>
            <Text style={styles.teamTitle}>Welcome to the player View</Text>
            <FlatList
                data={teams}
                renderItem={({ item }) =>
                    <TouchableOpacity>
                        <Text style={styles.teamTitle}>{item.teamTitle}</Text>
                        {players.filter(player => player.team === item.key)
                            .map(filteredPlayer => (
                                <View style={styles.teamTitle} key={filteredPlayer.key}>
                                    <Text>{filteredPlayer.name}</Text>
                                </View>
                            ))}
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
    teamTitle:{

        margin:5,
        backgroundColor:'white'
    }
});
