import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, Button } from "react-native";
import style from "./src/Component/Style";
import { useState } from "react";

export default function App() {
  // States
  const [color, setColor] = useState("red");
  const [color2, setColor2] = useState("red");
  const [color3, setColor3] = useState("red");
  const [deviceOn, setDeviceOn] = useState(0);

  // Functions
  const green = () => { setColor("green") };
  const green2 = () => { setColor2("green") };
  const green3 = () => { setColor3("green") };
  const red = () => { setColor("red") };
  const red2 = () => { setColor2("red") };
  const red3 = () => { setColor3("red") };
  const increase = () => { setDeviceOn(deviceOn + 1) };
  const decrease = () => { setDeviceOn(deviceOn - 1) };

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
            <View style={[style.boxes, { backgroundColor: color }]}></View>
            <Text style={style.deviceText}>Living Room Lamp</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => { green(); increase(); }} />
            <Button title="Off" onPress={() => { red(); decrease(); }} />
          </View>
        </View>
      </View>

      {/* Heater */}
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={[style.boxes, { backgroundColor: color2 }]}></View>
            <Text style={style.deviceText}>Heater</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => { green2(); increase(); }} />
            <Button title="Off" onPress={() => { red2(); decrease(); }} />
          </View>
        </View>
      </View>

      {/* Heater */}
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={[style.boxes, { backgroundColor: color3 }]}></View>
            <Text style={style.deviceText}>TV</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={() => { green3(); increase(); }} />
            <Button title="Off" onPress={() => { red3(); decrease(); }} />
          </View>
        </View>
      </View>

      {/* Section C Total Devices */}
      <Text style={style.totalText}>Total Devices On: {deviceOn}</Text>

      <StatusBar style="auto" />
    </View >
  );
}
