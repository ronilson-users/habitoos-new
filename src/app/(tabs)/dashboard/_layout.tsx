// => /src/app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import {
 Foundation,
 Ionicons,
 AntDesign,
 MaterialIcons
} from '@expo/vector-icons';

export default function TabLayout() {
 return (
  <Tabs
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: "#cecece",
    tabBarInactiveTintColor: "#242424",
    
    tabBarStyle: {
     backgroundColor: "#000",
     borderColor: "#242424",
    },
   }}
  >
   <Tabs.Screen
    name="index"
    options={{
     tabBarIcon: ({ size, color }) => (
      <Foundation name="home" size={size} color={color} />
     ),
    }}
   />
   
   <Tabs.Screen
    name="search"
    options={{
     tabBarIcon: ({ size, color }) => (
      <Ionicons name="search" size={size} color={color} />
     ),
    }}
   />
   
   <Tabs.Screen
    name="qrcode"
    options={{
     tabBarIcon: ({ size, color }) => (
      <MaterialIcons name="qr-code-scanner" size={size} color={color} />
     ),
    }}
   />
  
   <Tabs.Screen
    name="profiles"
    options={{
     tabBarIcon: ({ size, color }) => (
      <AntDesign name="user" size={size} color={color} />
     ),
    }}
   />
  </Tabs>
 );
}

