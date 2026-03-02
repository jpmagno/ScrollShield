// Analytics screen where users see their behavioral patterns
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../constants/theme";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 My Patterns</Text>
      <Text style={styles.subtitle}>Dashboard - coming soon</Text>
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
  subtitle: {
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
  },
});
