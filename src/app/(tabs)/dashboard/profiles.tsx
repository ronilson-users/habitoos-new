import React from "react";
    import { View, StyleSheet, Text } from "react-native";
    
    export default function Profiles() {
     return (
      <View style={styles.container}>
      <Text>Profiles</Text>
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
    