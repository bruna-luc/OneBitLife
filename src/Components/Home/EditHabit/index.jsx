import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

export default function EditHabit({ habit, frequency, habitArea, checkColor}) {
  function handleEdit() {
    console.log("Botão de editar clicado");
  }

  function handleCheck() {
    console.log(`ckeck do ${habitArea}`);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{habit}</Text>
        <Text style={styles.habitFrequency}>{frequency}</Text>
      </View>

      <TouchableOpacity
        style={[styles.check, { borderColor: checkColor }]}
        onPress={handleCheck}
      ></TouchableOpacity>
    </TouchableOpacity>
  );
}

styles = StyleSheet.create({

  button: {
    backgroundColor: "#151515",
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  habitTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  habitFrequency: {
    color: "#fff",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },



});
