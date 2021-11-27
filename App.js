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
  const [onOff, setOnOff] = useState(false);
  const [onOff2, setOnOff2] = useState(false);
  const [onOff3, setOnOff3] = useState(false);

  // Functions
  // Living Room Lamp
  const deviceOnn = () => {
    if (!onOff) {
      setColor("green");
      setDeviceOn(deviceOn + 1);
      setOnOff(true);
    }
  }

  const deviceOff = () => {
    if (onOff) {
      setColor("red");
      setDeviceOn(deviceOn - 1);
      setOnOff(false);
    }
  }

  // Heater
  const deviceOnn2 = () => {
    if (!onOff2) {
      setColor2("green");
      setDeviceOn(deviceOn + 1);
      setOnOff2(true);

    }
  }

  const deviceOff2 = () => {
    if (onOff2) {
      setColor2("red");
      setDeviceOn(deviceOn - 1);
      setOnOff2(false);
    }
  }

  // TV
  const deviceOnn3 = () => {
    if (!onOff3) {
      setColor3("green");
      setDeviceOn(deviceOn + 1);
      setOnOff3(true);
    }
  }

  const deviceOff3 = () => {
    if (onOff3) {
      setColor3("red");
      setDeviceOn(deviceOn - 1);
      setOnOff3(false);
    }
  }

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
            <Button title="On" onPress={deviceOnn} />
            <Button title="Off" onPress={deviceOff} />
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
            <Button title="On" onPress={deviceOnn2} />
            <Button title="Off" onPress={deviceOff2} />
          </View>
        </View>
      </View>

      {/* TV */}
      <View style={style.devicesContainer}>
        <View style={style.devices}>
          <View style={style.devicesSection}>
            <View style={[style.boxes, { backgroundColor: color3 }]}></View>
            <Text style={style.deviceText}>TV</Text>
          </View>
          <View style={style.buttons}>
            <Button title="On" onPress={deviceOnn3} />
            <Button title="Off" onPress={deviceOff3} />
          </View>
        </View>
      </View>

      {/* Section C Total Devices */}
      <Text style={style.totalText}>Total Devices On: {deviceOn}</Text>

      <StatusBar style="auto" />
    </View >
  );
}
