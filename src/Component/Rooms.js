import React from "react";
import { Text, View, Image, } from "react-native";
import style from "./Style";

const Rooms = () => {
  return (
    <View>
      <View>
        <Text style={style.text}>Rooms</Text>
      </View>

      {/* Living Room */}
      <View style={style.rooms}>
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("../../assets/living-room.png")}
          />
          <Text style={style.roomsText}>Living Room</Text>
        </View>

        {/* Bed Room */}
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("../../assets/bed.png")}
          />
          <Text style={style.roomsText}>Bed Room</Text>
        </View>

        {/* Kitchen Room */}
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("../../assets/kitchen.png")}
          />
          <Text style={style.roomsText} >Kitchen</Text>
        </View>
      </View>
    </View>
  );
};

export default Rooms;