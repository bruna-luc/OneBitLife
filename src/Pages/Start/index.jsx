import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Start() {
  return(
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image 
        source={require("../../assets/icons/logo3.png")}
        />

        <Text>
        Vamos trnsformar sua vida {"/n"} em jogos, buscando sempre {"/n"} o melhor nível.
        </Text>
      </ScrollView>
    </View>
  )
}