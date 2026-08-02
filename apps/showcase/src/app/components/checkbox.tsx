import { Checkbox } from "@/components/ui/checkbox";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME, useTheme } from "@/lib/theme";
import { Feather } from "@expo/vector-icons";

export default function CheckboxDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [notifications, setNotifications] = useState({
    email: false,
    sms: true,
    push: false,
  });

  return (
    <DemoScreen
      title="Checkbox"
      description="Animated toggle control for boolean values with spring-animated checkmark."
    >
      {/* Terms Acceptance */}
      <DemoSection label="Sign Up">
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: spacing.sm,
          }}
        >
          <Checkbox
            checked={agreedToTerms}
            onCheckedChange={setAgreedToTerms}
            accessibilityLabel="Accept terms and conditions"
          />
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: colors.foreground,
              lineHeight: 20,
            }}
          >
            I agree to the{" "}
            <Text style={{ fontWeight: "600", color: colors.primary }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={{ fontWeight: "600", color: colors.primary }}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </DemoSection>

      {/* Notification Preferences */}
      <DemoSection label="Notification Preferences">
        <View style={{ gap: spacing.md }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <Checkbox
              checked={notifications.email}
              onCheckedChange={(v) =>
                setNotifications((n) => ({ ...n, email: v }))
              }
              accessibilityLabel="Email notifications"
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, color: colors.foreground }}>
                Email notifications
              </Text>
              <Text style={{ fontSize: 13, color: colors.mutedForeground }}>
                Weekly digest and reply alerts
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <Checkbox
              checked={notifications.sms}
              onCheckedChange={(v) =>
                setNotifications((n) => ({ ...n, sms: v }))
              }
              accessibilityLabel="SMS notifications"
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, color: colors.foreground }}>
                SMS alerts
              </Text>
              <Text style={{ fontSize: 13, color: colors.mutedForeground }}>
                Payment and security alerts
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <Checkbox
              checked={notifications.push}
              onCheckedChange={(v) =>
                setNotifications((n) => ({ ...n, push: v }))
              }
              accessibilityLabel="Push notifications"
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, color: colors.foreground }}>
                Push notifications
              </Text>
              <Text style={{ fontSize: 13, color: colors.mutedForeground }}>
                In-app updates and mentions
              </Text>
            </View>
          </View>
        </View>
      </DemoSection>

      {/* Marketing Opt-In */}
      <DemoSection label="Preferences">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
          }}
        >
          <Checkbox
            checked={marketingOptIn}
            onCheckedChange={setMarketingOptIn}
            accessibilityLabel="Marketing emails"
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, color: colors.foreground }}>
              Marketing emails
            </Text>
            <Text style={{ fontSize: 13, color: colors.mutedForeground }}>
              Receive product updates and special offers
            </Text>
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
