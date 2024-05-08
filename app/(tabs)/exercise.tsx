// Import necessary modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Exercise from '../screens/vocabulary';

// Create a stack navigator
const Stack = createStackNavigator();

// Define your stack navigator with screens
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="exercise_screen" component={Exercise} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
