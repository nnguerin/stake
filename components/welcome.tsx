import { applicationName } from "@/constants/system";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Modal, Text, TextInput } from "react-native-paper";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [email, setEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F4EFE7", "#F4EFE7", "#d06a3ab0"]}
        style={styles.linearGradient}
      >
        <Swiper
          style={styles.wrapper}
          loop={false}
          dotColor="#2C2C2C"
          activeDotColor="#F4EFE7"
        >
          <View style={styles.slide}>
            <View style={styles.slideHeader}></View>
            <Text style={styles.title}>Welcome to {applicationName}</Text>
            <Text style={styles.text}>
              Stay connected to the people who matter most
            </Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideHeader}></View>
            <Text style={styles.title}>Real Questions, Real Answers</Text>
            <Text style={styles.text}>
              Thoughtful prompts that spark deep conversation
            </Text>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideHeader}></View>
            <Text style={styles.title}>Your Pace, Your Rhythm</Text>
            <Button
              mode="outlined"
              onPress={() => setShowSignUp(true)}
              textColor="#2C2C2C"
              buttonColor="#F4EFE7"
            >
              Get Started
            </Button>
          </View>
        </Swiper>
      </LinearGradient>

      <Modal
        visible={showSignUp}
        onDismiss={() => setShowSignUp(false)}
        contentContainerStyle={styles.modal}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <MaterialCommunityIcons
            name="email-variant"
            size={300}
            color="black"
          />
          <Text style={styles.text}>
            Enter your email for a one time password
          </Text>
          <TextInput
            style={{ width: "100%" }}
            label="Email"
            left={<TextInput.Icon icon="at" />}
            value={email}
            onChangeText={setEmail}
          />
          <Button
            mode="contained"
            onPress={() => console.log("requesting otp from supabase")}
            textColor="#F4EFE7"
            buttonColor="#2C2C2C"
          >
            Get OTP
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F4EFE7",
  },
  title: {
    textAlign: "center",
    color: "#2C2C2C",
    fontWeight: "800",
    fontFamily: "Montserrat-Black",
    fontSize: 24,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  image: {
    height: "50%",
    marginTop: "30%",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideHeader: {
    height: "50%",
    fontSize: 64,
    color: "#2C2C2C",
  },
  text: {
    textAlign: "center",
    color: "#2C2C2C",
    fontSize: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});

export default Welcome;
