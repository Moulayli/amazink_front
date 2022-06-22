import { View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { MaterialIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
       name="Setting"
       component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// la suite 
function DetailsScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={HomeScreen}
        options={{
          headerTitle: "Details",
          // ne pas afficher le titre de la page
          headerShown: false,

        }}
      />
    </Stack.Navigator>
  );
}

//la suite
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerTitle: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreenStack}
          options={{
            headerTitle: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// la suite
export default App;