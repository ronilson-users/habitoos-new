import React from "react";
import { View, StyleSheet, Text , Button } from "react-native";

import { Link, router } from "expo-router"

export default function Dashboard() {
 return (
  <View style={styles.container}>
   <Text>Painel</Text>
   
   <Button title="ir" onPress={()=> router.replace("/")} />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
 }
});
