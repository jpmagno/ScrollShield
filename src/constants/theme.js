// Design System
// Every color, font size, and spacing value in the app comes from this file.
// Able to change one value here that updates everywhere

export const COLORS = {
  // Backgrounds
  background: "#0f0f1a", // main dark navy (every screen)
  surface: "#1a1a2e", // slightly lighter (cards, boxes)
  surfaceAlt: "#16213e", // alternate surface (modals)
  border: "#2a2a4a", // subtle borders

  // Brand/Accent
  primary: "#7c6af7", // purple: main action color
  primaryLight: "#9d8ff9", // lighter purple (hover states)
  primaryDark: "#5b4de0", // darker purple (pressed states)

  // Semantic Colors
  success: "#4ade80", // green: great behavior, streaks
  warning: "#facc15", // yellow: caution, medium risk
  danger: "#f87171", // red: high risk, alerts
  info: "#60a5fa", // blue: neutral info

  // Risk Score Colors
  riskLow: "#4ade80", // Safe Zone: 0-33
  riskMedium: "#facc15", // At Risk: 34-66
  riskHigh: "#f87171", // Danger Zone: 67-100

  // Text
  textPrimary: "#ffffff", // Main text
  textSecondary: "#8888aa", // Muted text, labels
  textMuted: "#4a4a6a", // Very subtle text, placeholders

  // Gamification
  xpGold: "#fbbf24", // XP and achievement gold
  streakOrange: "#fb923c", // streak flame color
};

export const FONTS = {
  // Sizes follow a clear scale which is easier for consistency
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 26,
  xxxl: 36,
  display: 56, // for big numbers like risk score

  // Weights
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  heavy: "800",
};

export const SPACING = {
  // All spacing uses multiples of 4 to create visual rhythm and consistency
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  section: 64,
};

export const RADIUS = {
  // Border radius values
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 999, // perfect circle (Used for avatars, badges)
};

export const SHADOWS = {
  // Subtle shadows to lift cards off the background
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },

  medium: {
    shadowColor: "#7c6af7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  glow: {
    // Purple glow for highlighted elements
    shadowColor: "#7c6af7",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Risk Score Helper Function: Gives a score 0-100, then returns the right color automatically. Used throughout the app wherever risk is displayed.
export function getRiskColor(score) {
  if (score <= 33) return COLORS.riskLow;
  if (score <= 66) return COLORS.riskMedium;
  return COLORS.riskHigh;
}

// Returns a human-readable label for nay risk score
export function getRiskLabel(score) {
  if (score <= 33) return "Low Risk";
  if (score <= 66) return "Moderate Risk";
  return "High Risk";
}
