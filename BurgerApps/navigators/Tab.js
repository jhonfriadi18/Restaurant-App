import HomeScreen from '../screens/Home';
import MenuScreen from '../screens/Menu';
import MyComponent from '../screens/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default TabBottom = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
        }
        return <Ionicons name={iconName} size={25} color={"#ed7801"} />;
      },
      tabBarActiveTintColor: "#b2498b"
    })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false}}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{headerShown:false}}
        
      />
      
     
    </Tab.Navigator>
  )
}