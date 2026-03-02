// Main screen where users log doomscroll sessions
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../constants/theme";

export default function HomeScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.title}>🛡️ ScrollShield</Text>
      <Text style={styles.subtitle}>Home Screen - coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: FONTS.xxl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subtitile: {
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
  },
});
