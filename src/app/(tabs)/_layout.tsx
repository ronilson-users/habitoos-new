import { Stack } from "expo-router";


export default function Layout() {
 return (
  <Stack
   screenOptions={{
    headerStyle: {
     backgroundColor: "#242424",
    },
    headerTintColor: "#FFF"
   }} >
   
   <Stack.Screen name="dashboard" options={{ headerShown: false }} />
  </Stack>
  
 );
}

