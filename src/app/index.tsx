import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, router } from 'expo-router'


export default function App() {
 return (
  <View style={styles.container}>
   <Text>Ronilson Santos</Text>
   <Link href={"/profile"}>Ir para Perfil</Link>
   <Link href={"/user"}>Ir para User</Link>
   <StatusBar style="light-content" />

   <Link href={"/dashboard"}>Ir para Dasboard</Link>
   
   <Button title="Ir para DashBoard" onPress={()=>{router.replace("/dashboard")}} />
   
   <StatusBar style="auto" />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
