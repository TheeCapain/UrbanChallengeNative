import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/base'

export default function Card({ route }) {
    console.log(route);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text>{route.params.card.title}</Text>
                    <Text>{route.params.card.description}</Text>
                    <Text>{route.params.card.points}</Text>
                    <Text>Time limit: 10 minutes</Text>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Accept"
                    buttonStyle={{
                        backgroundColor: 'green',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        width: '90%',

                    }}
                />
                <Button
                    title="Veto"

                    buttonStyle={{
                        width: '90%',
                        backgroundColor: 'red',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,


                    }}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313638',

    }, card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: '90%'

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex',

        flexDirection: 'row'
    },
    cardButton: {
        width: '90%',
        backgroundColor: 'red',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
    }

});