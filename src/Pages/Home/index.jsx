import React ,{useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit"
// import EditHabit from "../../Components/Home/EditHabit"

export default function Home() {
  const navigation = useNavigation();
  const [mindHabit, setMindHabit]= useState();
  const [moneyHabit, setMoneyHabit]= useState();
  const [bodayHabit, setBodayHabit]= useState();
  const [funHabit, setFunHabit]= useState();


  function hadleNavExplanation() {
    navigation.navigate("AppExplanation")
  }

  return (
    <View style= {styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>

          <LifeStatus />
          <StatusBar/> 
          <CreateHabit 
          habitArea="Mente"
           borderColor="#90B7F3"/>
        
        <Text
        style={styles.explanationText}
        onPress={ () => {
          hadleNavExplanation();

        }}> Ver explicação novamente 
        </Text>
        
        
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyChecks: {
    color: "#fff",
    fontWeight: "bold",
    textAlign:"center",
    fontSize:18,
    marginTop:40,
  },
explanationText:{
color:"#fff",
fontWeight: "bold",
textAlign:"center",
fontSize:16,
paddingTop:15,
paddingBottom:25,
},





})