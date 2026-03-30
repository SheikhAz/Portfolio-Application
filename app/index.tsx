import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Linking,
  Animated,
  PanResponder,
} from "react-native";
import Card from "./card";
import { Stack } from "expo-router";
import React, { useRef, useState } from "react";

export default function Index() {
  const project = [
    {
      project: " Fitness Website",
      description:
        "This website is used for managing the number of Member in GYM and also Make them Register very Easily.",
      Link: require("../assets/images/project_1.png"),
    },
    {
      project: " Movie Recommendation System",
      description:
        "AI model that recommends movies based on similarity and user preferences.",
      Link: require("../assets/images/project_3.png"),
    },
    {
      project: " Loan Detection Model",
      description:
        "Machine learning model to predict loan approval using classification.",
      Link: require("../assets/images/project_2.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20,

      onPanResponderMove: (_, gesture) => {
        translateX.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -120) {
          Animated.timing(translateX,{
            toValue: -400,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex((prev) => (prev + 1) % project.length);
            translateX.setValue(400);
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          });
        } else if (gesture.dx > 120) {
          Animated.timing(translateX, {
            toValue: 400,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex((prev) => (prev - 1 + project.length) % project.length);
            
            translateX.setValue(-400);
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;
  return (
    <>
      <Stack.Screen
        options={{
          title: "Portfolio",
          headerRight: () => (
            <Text style={{ color: "white", fontSize: 18 }}>⚙️</Text>
          ),
        }}
      />
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: "black",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Sheikh Azmatulla
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 10,
          }}
        >
          I am Currently in 6th Semester.
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            paddingTop: 20,
          }}
        >
          <Pressable
            onPress={() => Linking.openURL("https://web.whatsapp.com")}
          >
            <Image
              source={require("../assets/images/whatsapp.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.instagram.com/accounts/login/?hl=en")
            }
          >
            <Image
              source={require("../assets/images/instagram.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL("https://www.linkedin.com/feed/")}
          >
            <Image
              source={require("../assets/images/linkedin.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
        <Text
          style={{
            color: "grey",
            paddingTop: 30,
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          TECHNICAL SKILLS
        </Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            paddingTop: 20,
          }}
        >
          <Text>
            <Text style={{ color: "green", fontSize: 16 }}>• Django</Text>
            <Text>d</Text>
            <Text style={{ color: "cyan", fontSize: 16 }}>• React Native</Text>
          </Text>
          <Text style={{ color: "orange", fontSize: 16 }}>• Python</Text>
          <Text>
            <Text style={{ color: "#999966", fontSize: 16 }}>• pandas</Text>
            <Text>d</Text>
            <Text style={{ color: "#8078d4", fontSize: 16 }}>• NumPy</Text>
            <Text>d</Text>
            <Text style={{ color: "#494946", fontSize: 16 }}>• Git</Text>
          </Text>
          <Text>
            <Text style={{ color: "#5672ab", fontSize: 16 }}>• Tailwind</Text>
            <Text>d</Text>
            <Text style={{ color: "#de4247", fontSize: 16 }}>• FastAPI</Text>
          </Text>
        </View>
        <View style={styles.box}>
          <View>
            <Text
              style={{
                color: "grey",
                fontSize: 20,
                fontWeight: 900,
                top: -30,
              }}
            >
              PROJECT
            </Text>
          </View>
          <Animated.View
            style={{ transform: [{ translateX }] }}
            {...panResponder.panHandlers}
          >
            <Card
              project={project[currentIndex].project}
              description={project[currentIndex].description}
              Link={project[currentIndex].Link}
            ></Card>
          </Animated.View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 300,
    width: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1011",
    marginTop: 30,
    position: "relative",
    borderRadius: 20,
  },
});
