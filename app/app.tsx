import Unauthenticated from "@/components/Unauthentcated";
import { useAuth } from "@/lib/auth-context";
import { Stack } from "expo-router";
import "react-native-reanimated";

const App = () => {
  const { session } = useAuth();

  if (!session) {
    return <Unauthenticated />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
};
export default App;
