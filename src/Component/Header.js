import React from "react";
import { Text, View, Image, } from "react-native";
import style from "./Style";

const Header = () => {
  return (
    <View style={style.header}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("../../assets/house.png")}
      />
      <Text style={style.headerText}>SmartHome</Text>
    </View>
  );
};

export default Header;