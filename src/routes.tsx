import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Camera from "./pages/Camera";
import Main from "./pages/Main";

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon:({ color })=> <Feather name="home" size={20} color={color}/>}} name="Main" component={Main} />
        <Tab.Screen  options={{tabBarIcon:({ color })=> <Feather name="camera" size={20} color={color}/>}} name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}