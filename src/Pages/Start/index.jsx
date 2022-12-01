import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import {userNavigation} from "@react-navigation/native"

import LifeStatus from "../../Components/Common/LifeStatus";
import DefaultButton from "../../Components/Common/DefaultButton";

export default function Start() {
  const handleNavAppExplanation = () => {
    console.log("Testing click");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/icons/logo3.png")}
            style={styles.logo}
          />

          <LifeStatus />

          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em jogos, buscando sempre {"\n"} o
            melhor nível.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginBottom: 20,
    marginTop: 60,
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
});
