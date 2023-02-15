//react
import { createContext, useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//firebase
import { onAuthStateChanged } from "firebase/auth"
//compo
import Chat from './screens/Chat';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from "./screens/Home"
import { auth } from './config/firebase';

const Stack = createStackNavigator()
const AuthUserContext = createContext({
    user: null,
    setUser: (v: any) => {}
})

interface PropsAuthUserProvider {
  children: any
}

const AuthUserProvider = ({ children }: PropsAuthUserProvider) => {
  const [user, setUser] = useState(null)

  return(
    <AuthUserContext.Provider value={{ user, setUser }}>
        { children }
    </AuthUserContext.Provider>
  )
}

const ChatStack = () => {
    return(
      <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    )
}

const AuthStack = () => {
    return(
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    )
}

const RootNavigator = () => {
  const { user, setUser } = useContext(AuthUserContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  },[user])

  if(loading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' />
    </View>
  }

  return(
      <NavigationContainer>
        { user ? <ChatStack /> : <AuthStack />}
      </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthUserProvider>
      <RootNavigator />
    </AuthUserProvider>
  );
}
