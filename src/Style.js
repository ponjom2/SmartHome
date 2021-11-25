import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginTop: 60,
    backgroundColor: "#fff",
  },

  images: {
    width: 90,
    height: 90,
  },

  text: {
    marginTop: 30,
    marginLeft: 15,
    fontSize: 24,
    fontWeight: "bold",
  },

  // Header
  header: {
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#2fa8cc",
  },

  // Section A Rooms
  rooms: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  roomsText: {
    textAlign: "center",
    marginTop: 15,
  },

  roomBackground: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: "#78b7bb",
  },

  // Section B Devices
  devicesContainer: {
    marginTop: 10,
    alignItems: "center",
  },

  devices: {
    width: "93%",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff1c1",
  },

  devicesSection: {
    width: "87%",
    flexDirection: "row",
  },

  buttons: {
    backgroundColor: "#fff",
  },

  boxes: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
    backgroundColor: "red",
  },

  deviceText: {
    fontSize: 16,
  },

  // Section C Total Devices
  totalText: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default style;