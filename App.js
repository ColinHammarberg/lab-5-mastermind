import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const pin_images = [];
  pin_images[0] = require("./pics/pin1.png");
  pin_images[1] = require("./pics/pin2.png");
  pin_images[2] = require("./pics/pin3.png");
  pin_images[3] = require("./pics/pin4.png");
  pin_images[4] = require("./pics/pin6.png");
  pin_images[5] = require("./pics/pin7.png");
  pin_images[6] = require("./pics/pin5.png");
  pin_images[7] = require("./pics/pin8.png");

  const [history, setHistory] = useState([]);
  const [currPins, setCurrPins] = useState([]);
  const [responses, setResponses] = useState([]);

  const hidden_pins = [4, 2, 1, 5];

  function click0() {
    const clicked_pin = 0;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([...clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  function click1() {
    const clicked_pin = 1;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  function click2() {
    const clicked_pin = 2;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  function click3() {
    const clicked_pin = 3;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  function click4() {
    const clicked_pin = 4;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  function click5() {
    const clicked_pin = 5;
    setHistory([clicked_pin, ...history]);

    let curr_pin_index;

    if (currPins.length == 4) {
      //update pins
      setCurrPins([clicked_pin]);
      curr_pin_index = 0;
      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin) setResponses([7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1) setResponses([6]);
      else setResponses([]);
    } else if (currPins.indexOf(clicked_pin) == -1) {
      //update pins
      curr_pin_index = currPins.length;
      setCurrPins([...currPins, clicked_pin]);

      //update responses
      if (hidden_pins[curr_pin_index] == clicked_pin)
        setResponses([...responses, 7]);
      else if (hidden_pins.indexOf(clicked_pin) != -1)
        setResponses([...responses, 6]);
    }
  }
  return (
    <View style={{ backgroundColor: "sandybrown", flex: 1 }}>
      <View style={{ flex: 0.05 }} />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 0.15 }}>
            <Text>Current Selection</Text>
            <FlatList
              data={currPins}
              horizontal={true}
              renderItem={({ item }) => (
                <Image source={pin_images[item]} style={styles.image_style2} />
              )}
            />
          </View>
          <View style={{ flex: 0.15 }}>
            <Text>Responses</Text>
            <FlatList
              data={responses}
              horizontal={true}
              renderItem={({ item }) => (
                <Image source={pin_images[item]} style={styles.image_style2} />
              )}
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>Click History</Text>
            <FlatList
              style={{ flex: 1 }}
              data={history}
              horizontal={true}
              renderItem={({ item }) => (
                <Image source={pin_images[item]} style={styles.image_style2} />
              )}
            />
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }}>
          <Image
            source={require("./pics/mastermind.png")}
            style={{ resizeMode: "stretch", flex: 1, width: "auto" }}
          />
        </View>
      </View>
      <View style={{ flex: 0.1, flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click0}
        >
          <Image source={pin_images[0]} style={styles.image_style1} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click1}
        >
          <Image source={pin_images[1]} style={styles.image_style1} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click2}
        >
          <Image source={pin_images[2]} style={styles.image_style1} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click3}
        >
          <Image source={pin_images[3]} style={styles.image_style1} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click4}
        >
          <Image source={pin_images[4]} style={styles.image_style1} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ flex: 1 }}
          onPress={click5}
        >
          <Image source={pin_images[5]} style={styles.image_style1} />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  full_row_style: {
    flexDirection: "row",
    flex: 0.07,
  },
  image_style1: {
    flex: 1,
    resizeMode: "stretch",
    width: "auto",
  },
  image_style2: {
    resizeMode: "stretch",
    width: 58,
    height: 58,
  },
});
