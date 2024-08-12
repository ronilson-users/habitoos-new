

import { Stack } from "expo-router"

export default function Layout() {
 return (
  <Stack
   screenOptions={{
    headerStyle: {
     backgroundColor: "#242424",
    },
    headerTintColor: "#FFF"
   }}
  >
   <Stack.Screen name="index" options={{ title: "Home" }} />
   <Stack.Screen name="profile" options={{ title: "Perfil" }} />
   <Stack.Screen name="user/index" options={{ title: "Usuario" }} />

   <Stack.Screen name="(tabs)" options={{headerShown : false}} />
  </Stack>
 );
}


