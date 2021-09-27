import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Home } from './screens';

import {icons, images, COLORS, SIZES, FONTS} from './constants';

const theme = {
    ...DefaultTheme,
    border: 'transparent',
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName= {"Home"}
            >
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        title: "SHOE SELECTOR",
                        headerTitleAlign: 'center',
                        headerTitleColor: COLORS.lightGray,
                        headerTitleStyle:{...FONTS.navTitle},
                        headerLeft: ({onPress}) => (
                            <TouchableOpacity
                                style={{marginLeft: SIZES.padding}}
                                onPress={onPress}
                            >
                                <Image 
                                    source={icons.menu}
                                    resizeMode='contain'
                                    style={{
                                        width: 20, 
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: ({onPress}) => (
                            <TouchableOpacity
                                style={{marginRight: SIZES.padding}}
                                onPress={onPress}
                            >
                                <Image 
                                    source={icons.search}
                                    resizeMode='contain'
                                    style={{
                                        width: 20, 
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return <App />;
}