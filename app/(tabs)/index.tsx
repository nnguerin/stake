import { StyleSheet, View } from "react-native";

import SignOutButton from "@/components/authentication-buttons/SignOutButton";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  const prompts = useQuery({
    queryKey: ["prompts"],
    queryFn: async () => {
      const response = await supabase.from("prompts").select();
      return response.data;
    },
  });

  return (
    <View style={styles.tabContainer}>
      <View style={styles.titleContainer}>
        <Text variant="headlineSmall">Prompts</Text>
      </View>
      {prompts.data && (
        <View style={styles.stepContainer}>
          {prompts.data.map((prompt) => (
            <Text key={prompt.id}>- {prompt.text}</Text>
          ))}
        </View>
      )}

      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
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
