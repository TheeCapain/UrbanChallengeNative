import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import GameSetup from '../Screens/gameSetup';
import Test from '../Screens/test';
import Game from '../Screens/game';
import Shop from '../Screens/shop';
import Cards from '../Screens/card';

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
                    name="cards"
                    component={Cards}
                />

                <Stack.Screen
                    name="TestScreen"
                    component={Cards}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

