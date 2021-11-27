import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import style from "./src/Component/Style";
import Header from "./src/Component/Header";
import Rooms from "./src/Component/Rooms";
import Devices from "./src/Component/Devices";


export default function App() {
  return (
    <View style={style.container}>
      <Header />
      {/* Section A */}
      <Rooms />
      {/* Section B */}
      <Devices />
      <StatusBar style="dark" />
    </View >
  );
}
