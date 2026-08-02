import { THEME, useTheme } from "@/lib/theme";
import useStyles from "@/lib/use-styles";
import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const components = [
  { name: "Accordion", href: "/components/accordion" },
  { name: "Alert", href: "/components/alert" },
  { name: "Alert Dialog", href: "/components/alert-dialog" },
  { name: "Aspect Ratio", href: "/components/aspect-ratio" },
  { name: "Avatar", href: "/components/avatar" },
  { name: "Badge", href: "/components/badge" },
  { name: "Button", href: "/components/button" },
  { name: "Button Group", href: "/components/button-group" },
  { name: "Calendar", href: "/components/calendar" },
  { name: "Card", href: "/components/card" },
  { name: "Carousel", href: "/components/carousel" },
  { name: "Checkbox", href: "/components/checkbox" },
  { name: "Date Picker", href: "/components/date-picker" },
  { name: "Dialog", href: "/components/dialog" },
  { name: "Empty", href: "/components/empty" },
  { name: "Field", href: "/components/field" },
  { name: "Input", href: "/components/input" },
  { name: "Input OTP", href: "/components/input-otp" },
  { name: "Label", href: "/components/label" },
  { name: "Progress", href: "/components/progress" },
  { name: "Radio Group", href: "/components/radio-group" },
  { name: "Select", href: "/components/select" },
  { name: "Separator", href: "/components/separator" },
  { name: "Skeleton", href: "/components/skeleton" },
  { name: "Sonner", href: "/components/sonner" },
  { name: "Spinner", href: "/components/spinner" },
  { name: "Switch", href: "/components/switch" },
  { name: "Table", href: "/components/table" },
  { name: "Textarea", href: "/components/textarea" },
  { name: "Typography", href: "/components/typography" },
];

export default function Index() {
  const { theme } = useTheme();
  const { colors, spacing, radius, typography } = THEME[theme];
  const styles = useStyles((t) => ({
    container: {
      flex: 1,
      backgroundColor: THEME[t].colors.background,
    },
    header: {
      padding: THEME[t].spacing.lg,
      paddingTop: THEME[t].spacing["2xl"],
    },
    title: {
      fontSize: THEME[t].typography["2xl"],
      fontWeight: "800",
      color: THEME[t].colors.foreground,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: THEME[t].typography.base,
      color: THEME[t].colors.mutedForeground,
      marginTop: THEME[t].spacing.xs,
      lineHeight: THEME[t].typography.base * 1.4,
    },
    list: {
      padding: THEME[t].spacing.lg,
      paddingTop: 0,
      gap: THEME[t].spacing.sm,
    },
    link: {
      padding: THEME[t].spacing.md,
      backgroundColor: THEME[t].colors.card,
      borderRadius: THEME[t].radius.lg,
      borderWidth: 1,
      borderColor: THEME[t].colors.border,
    },
    linkText: {
      fontSize: THEME[t].typography.base,
      fontWeight: "600",
      color: THEME[t].colors.foreground,
    },
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Native UI</Text>
        <Text style={styles.subtitle}>
          A carefully crafted component library for React Native. Explore 30+
          components with real-world examples.
        </Text>
      </View>
      <View style={styles.list}>
        {components.map((c) => (
          <Link key={c.href} href={c.href as any} style={styles.link}>
            <Text style={styles.linkText}>{c.name}</Text>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
