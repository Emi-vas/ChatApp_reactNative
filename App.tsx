//react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//compo
import Chat from './screens/Chat';
import Login from './screens/Login';

const Stack = createStackNavigator()

const ChatStack = () => {
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Chat' component={Login} />
      </Stack.Navigator>
    )
}

const RootNavigator = () => {
  return(
      <NavigationContainer>
          <ChatStack />
      </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator />;
}
