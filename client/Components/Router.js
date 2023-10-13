import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import GameSetup from '../Screens/gameSetup';
import Test from '../Screens/test';
import Game from '../Screens/game';
import Shop from '../Screens/shop';
<<<<<<< HEAD
import Cards from '../Screens/card';
import Lobby from '../Screens/lobby'
=======
import Cards from '../Screens/cardsView';
import Card from '../shared/card';
import PlayerView from '../Screens/playerView'
>>>>>>> 99e41c53d90ed70210e0b214e23693a462e85172

const Stack = createNativeStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Create Game"
                    component={GameSetup}
                />

                <Stack.Screen
                    name="Game"
                    component={Game}
                />
                <Stack.Screen
                    name="Shop"
                    component={Shop}
                />
                <Stack.Screen
                    name="cardsOverview"
                    component={Cards}
                />
                <Stack.Screen
                    name="card"
                    component={Card}
                />
                    <Stack.Screen
                    name="players"
                    component={PlayerView}
                />

                <Stack.Screen
                    name="TestScreen"
<<<<<<< HEAD
                    component={Lobby}
=======
                    component={Test}
>>>>>>> 99e41c53d90ed70210e0b214e23693a462e85172
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

