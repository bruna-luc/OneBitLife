import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function Start() {
  return(
    <View style={ styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ {alignItems : "center"} }>
        <Image 
        source={require("../../assets/icons/logo3.png")}
        style= {styles.logo}
        />

        <Text style={styles.description}>
        Vamos transformar sua vida {"\n"} em jogos, buscando sempre {"\n"} {" "}o melhor nível.
        </Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgba(21, 21, 21, 0.98)",
      },
logo:{
  width:300,
  height:60,
  marginBottom:20,
  marginTop:60,
},
description:{
  color:"#ffffff",
  fontSize: 20,
  textAlign:"center",
  marginVertical:60,
},
    })