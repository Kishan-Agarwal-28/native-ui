import { THEME, useTheme } from "@/lib/theme";
import { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

export function DemoScreen({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const { theme } = useTheme();
  const { colors, spacing, typography } = THEME[theme];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{
        padding: spacing.lg,
        paddingBottom: spacing["3xl"],
        gap: spacing.lg,
      }}
    >
      {title && (
        <View style={{ marginBottom: spacing.sm }}>
          <Text
            style={{
              fontSize: typography["2xl"],
              fontWeight: "800",
              color: colors.foreground,
              letterSpacing: -0.5,
            }}
          >
            {title}
          </Text>
          {description && (
            <Text
              style={{
                fontSize: typography.base,
                color: colors.mutedForeground,
                marginTop: spacing.xs,
                lineHeight: typography.base * 1.4,
              }}
            >
              {description}
            </Text>
          )}
        </View>
      )}
      {children}
    </ScrollView>
  );
}

export function DemoSection({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  const { theme } = useTheme();
  const { colors, spacing, typography } = THEME[theme];

  return (
    <View style={{ gap: spacing.md }}>
      {label && (
        <Text
          style={{
            fontSize: typography.xs,
            fontWeight: "700",
            color: colors.mutedForeground,
            textTransform: "uppercase",
            letterSpacing: 0.8,
          }}
        >
          {label}
        </Text>
      )}
      {children}
    </View>
  );
}
