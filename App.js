// Root of the App
// This file does 3 important things:
// 1. Sets up the navigation container (Wraps the whole app)
// 2. Defines the bottom tab bar (the menu at the bottom)
// 3. Points each tab to its screen component

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

// Screens (Building these next)
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// Design system
import { COLORS } from "./src/constants/theme";

// Tab Navigator: Creates the bottom tab bar (Menu Of App)
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer wraps the entire app (required)
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          // Tab Bar Styling
          tabBarStyle: {
            backgroundColor: COLORS.surface, // dark background
            borderTopColor: COLORS.border, // subtle top border
            borderTopWidth: 1,
            paddingBottom: 8,
            paddingTop: 8,
            height: 65,
          },
          tabBarActiveTintColor: COLORS.primary, // purple when selected
          tabBarInactiveTintColor: COLORS.textMuted, // gray when not selected

          // Header Styling
          headerStyle: {
            backgroundColor: COLORS.background,
            shadowColor: "transparent", // removes iOS header shadow
            elevation: 0, // removes Android header shadow
          },
          headerTintColor: COLORS.textPrimary,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
        }}
      >
        {/* Each Tab.Screen = one tab in the bottom menu */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ScrollShield", //header title
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🛡️</Text>,
          }}
        />

        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Patterns",
            tabBarLabel: "Patterns",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📊</Text>,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
