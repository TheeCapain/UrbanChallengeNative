import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import GameSetup from '../Screens/gameSetup';
import Test from '../Screens/test';
import Game from '../Screens/game';
import Shop from '../Screens/shop';
import Cards from '../Screens/cardsView'
import Card from '../shared/card'
import PlayerView from '../Screens/playerView';



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
                    name="playerView"
                    component={PlayerView}
                />
                <Stack.Screen
                    name="TestScreen"
                    component={Test}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

