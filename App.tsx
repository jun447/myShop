import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importing Screens

import Home from './screens/Home';
import Details from './screens/Details';

// params
export type RootStackParamList = {
  Home: undefined;
  Details: {product:Product};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Trending Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen 
        name="Details" 
        component={Details}
        options={{
          title: 'Products details',
          headerStyle: {
            backgroundColor: '#f451ve',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
