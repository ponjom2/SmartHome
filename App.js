import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, Button } from "react-native";
import style from "./src/Style";

export default function App() {
  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("./assets/house.png")}
        />
        <Text style={style.headerText}>SmartHome</Text>
      </View>

      {/* Section A Rooms*/}
      <View>
        <Text style={style.text}>Rooms</Text>
      </View>

      {/* Rooms */}
      <View style={style.rooms}>

        {/* Living room */}
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("./assets/living-room.png")}
          />
          <Text style={style.roomsText}>Living Room</Text>
        </View>

        {/* Bedroom */}
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("./assets/bed.png")}
          />
          <Text style={style.roomsText}>BedRoom</Text>
        </View>

        {/* Kitchen */}
        <View style={style.roomBackground}>
          <Image
            style={style.images}
            source={require("./assets/kitchen.png")}
          />
          <Text style={style.roomsText} >Kitchen</Text>
        </View>
      </View>

      {/* Section B Devices*/}
      {/* Living Room Lamp */}
      <Text style={style.text}>Devices</Text>
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={style.boxes}></View>
            <Text style={style.deviceText}>Living Room Lamp</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => console.log("On")} />
            <Button title="Off" onPress={() => console.log("Off")} />
          </View>
        </View>
      </View>

      {/* Heater */}
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={style.boxes}></View>
            <Text style={style.deviceText}>Heater</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => console.log("On")} />
            <Button title="Off" onPress={() => console.log("Off")} />
          </View>
        </View>
      </View>


      {/* Heater */}
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={style.boxes}></View>
            <Text style={style.deviceText}>TV</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => console.log("On")} />
            <Button title="Off" onPress={() => console.log("Off")} />
          </View>
        </View>
      </View>

      {/* Section C Total Devices */}
      <Text style={style.totalText}>Total Devices On: {0 + 0}</Text>

      <StatusBar style="auto" />
    </View >
  );
}
