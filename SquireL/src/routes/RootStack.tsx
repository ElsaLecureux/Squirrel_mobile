import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

import HomeDrawer  from '../routes/HomeDrawer';

const Stack = createNativeStackNavigator();

export default function RootStack () {
    return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}   />
          <Stack.Screen name="SignInScreen" component={SignInScreen}   />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen}   />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer}   />
      </Stack.Navigator>  
    )

}