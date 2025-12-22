import { ThemeProvider, useTheme } from "@/hooks/theme/Themes";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

function ThemedStatusBar() {
  const { colors } = useTheme();

  return (
    <StatusBar
      style={colors.statusBarStyle}
      translucent
      backgroundColor="transparent"
    />
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStatusBar />
      <Slot />
    </ThemeProvider>
  );
}
