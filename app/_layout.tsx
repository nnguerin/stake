import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PaperProvider } from "react-native-paper";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { AuthProvider } from "@/lib/auth-context";
import App from "./app";

export const unstable_settings = {
  anchor: "(tabs)",
};

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <PaperProvider>
            <App />
          </PaperProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
