import { Platform, StyleSheet, View } from "react-native";

import SignOutButton from "@/components/social-auth-buttons/sign-out-button";
import { Link } from "expo-router";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text>Welcome!</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 1: Try it</Text>
        <Text>
          Edit <Text>app/(tabs)/index.tsx</Text> to see changes. Press{" "}
          <Text>
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <Text>Step 2: Explore</Text>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <Text>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 3: Get a fresh start</Text>
        <Text>
          {`When you're ready, run `}
          <Text>npm run reset-project</Text> to get a fresh <Text>app</Text>{" "}
          directory. This will move the current <Text>app</Text> to{" "}
          <Text>app-example</Text>.
        </Text>
      </View>
      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
