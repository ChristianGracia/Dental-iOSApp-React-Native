import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Veneers extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Veneers</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            source={{
              uri:
                "https://live.staticflickr.com/6177/6204514757_2066682132.jpg"
            }}
            resizeMode="contain"
          />
          <Text style={styles.itemPickText}>
            Veneers are a thin layer of porcelain/composite material that is
            designed to fit over the front surface of a tooth.
            {"\n"}
            {"\n"}
            Veneers can improve the color, shape, position of tooth, and close
            gaps that would normally require braces.
            {"\n"}
            {"\n"}
            First a small amount of enamel (just enough to fit the Veneer) is
            removed from the tooth where the Veneer is being placed. This is
            done so that once the Veneer is placed, the tooth will be its normal
            size.
            {"\n"}
            {"\n"}
            Then an impression will be taken and a Veneer will be created by our
            lab and matched to the color of your surrounding teeth.
            {"\n"}
            {"\n"}
            Veneers can last for a very long time and quickly help solve problem
            areas in your smile.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#114260",
    fontSize: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#114260",
    marginTop: 20,
    backgroundColor: "#fcec01",
    marginBottom: 10
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  },
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  }
});

export default Veneers;
