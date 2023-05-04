import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import TabBottom from './Tab'
import LandingPage from '../screens/Landing';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="TabBottom"
          component={TabBottom}
          options={{
            title: "",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "",
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack