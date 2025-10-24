import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Text } from "react-native-paper";
import Auth from "./Auth";

const Unauthenticated = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F4EFE7", "#F4EFE7", "#d06a3ab0"]}
        style={styles.linearGradient}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ height: "50%" }}
        />
        <Text style={styles.title} variant="displayMedium">
          Stake
        </Text>
        <Auth />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F4EFE7",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "#2C2C2C",
    fontWeight: "800",
    fontFamily: "Montserrat-Black",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default Unauthenticated;

/**
 * image 2/3rds of screen
 * App Name
 * Tagline
 * Sign up
 * Login
 * Terms and conditions
 */
