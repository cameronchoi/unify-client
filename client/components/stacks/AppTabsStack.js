import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../../screens/ProfileScreen";
import MatchesScreen from "../../screens/MatchesScreen";
import HomeScreen from "../../screens/HomeScreen";

import Fonts from "../../constants/fonts";

import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const AppTabsStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-chatbubbles" size={26} color={color} />
          ),
          title: "unify",
          headerTitleStyle: {
            fontFamily: Fonts.normal,
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabsStack;
