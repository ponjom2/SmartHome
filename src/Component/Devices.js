import React from "react";
import { Text, View, Button } from "react-native";
import { useState } from "react";
import style from "./Style";

const Devices = () => {
  // States
  const [onOff, setOnOff] = useState(false);
  const [color, setColor] = useState("red");
  const [color2, setColor2] = useState("red");
  const [onOff2, setOnOff2] = useState(false);
  const [color3, setColor3] = useState("red");
  const [onOff3, setOnOff3] = useState(false);
  const [deviceOn, setDeviceOn] = useState(0);

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
    <View>
      <Text style={style.text}>Devices</Text>

      {/* Living Room */}
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

      {/* Total Devices */}
      <Text style={style.totalText}>Total Devices On: {deviceOn}</Text>
    </View>
  );
};

export default Devices;