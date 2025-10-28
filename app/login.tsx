import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Login" }} />
      <View style={styles.container}>
        <Text variant="headlineLarge">Login</Text>
        <Link href="/" style={styles.link}>
          <Text variant="bodyLarge">Try to navigate to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
