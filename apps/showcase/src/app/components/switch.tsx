import Switch from "@/components/ui/switch";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type SettingToggleProps = {
  label: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  value: boolean;
  onValueChange: (value: boolean) => void;
};

function SettingToggle({
  label,
  description,
  icon,
  value,
  onValueChange,
}: SettingToggleProps) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={[
        styles.toggleRow,
        {
          paddingVertical: spacing.md,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.md,
          flex: 1,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: colors.muted,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={icon} size={18} color={colors.foreground} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.foreground,
            }}
          >
            {label}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: colors.mutedForeground,
              marginTop: 2,
            }}
          >
            {description}
          </Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        accessibilityLabel={`Toggle ${label}`}
        accessibilityHint={description}
      />
    </View>
  );
}

export default function SwitchDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [autoSave, setAutoSave] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <DemoScreen
      title="Toggle Switch"
      description="Animated switches for boolean settings with smooth transitions and full accessibility support."
    >
      <DemoSection label="Notification Preferences">
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: 12,
            paddingHorizontal: spacing.md,
          }}
        >
          <SettingToggle
            label="Push Notifications"
            description="Receive real-time alerts on your device"
            icon="bell"
            value={notifications}
            onValueChange={setNotifications}
          />
          <SettingToggle
            label="Email Digest"
            description="Weekly summary of your activity"
            icon="mail"
            value={emailDigest}
            onValueChange={setEmailDigest}
          />
          <SettingToggle
            label="Marketing Emails"
            description="Updates about new features and offers"
            icon="send"
            value={marketingEmails}
            onValueChange={setMarketingEmails}
          />
        </View>
      </DemoSection>

      <DemoSection label="App Settings">
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: 12,
            paddingHorizontal: spacing.md,
          }}
        >
          <SettingToggle
            label="Dark Mode"
            description="Use dark color scheme"
            icon="moon"
            value={darkMode}
            onValueChange={setDarkMode}
          />
          <SettingToggle
            label="Auto-Save Drafts"
            description="Automatically save your work every 30 seconds"
            icon="save"
            value={autoSave}
            onValueChange={setAutoSave}
          />
          <SettingToggle
            label="Usage Analytics"
            description="Help us improve by sharing anonymous usage data"
            icon="bar-chart"
            value={analytics}
            onValueChange={setAnalytics}
          />
        </View>
      </DemoSection>

      <DemoSection label="Disabled State">
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: 12,
            paddingHorizontal: spacing.md,
          }}
        >
          <View
            style={[
              styles.toggleRow,
              {
                paddingVertical: spacing.md,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                opacity: 0.5,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: spacing.md,
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: colors.muted,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="lock" size={18} color={colors.foreground} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.foreground,
                  }}
                >
                  Two-Factor Auth
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.mutedForeground,
                    marginTop: 2,
                  }}
                >
                  Required for admin accounts
                </Text>
              </View>
            </View>
            <Switch
              value={true}
              onValueChange={() => {}}
              disabled
              accessibilityLabel="Two-factor authentication (disabled)"
            />
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
