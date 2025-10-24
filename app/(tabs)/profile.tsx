import { StyleSheet, View } from "react-native";

import { Fonts } from "@/constants/theme";
import { Text } from "react-native-paper";

export default function TabThreeScreen() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text
          variant="displayMedium"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Profile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
