import Input from "@/components/ui/input";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME, useTheme } from "@/lib/theme";

export default function InputDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <DemoScreen
      title="Input"
      description="Animated text input with label, hint, error, and icon support."
    >
      {/* Login Form */}
      <DemoSection label="Sign In">
        <View style={{ gap: spacing.md }}>
          <Input
            label="Email"
            placeholder="you@company.com"
            value={email}
            onChangeText={setEmail}
            inputMode="email"
            leftIcon={
              <Feather name="mail" size={16} color={colors.mutedForeground} />
            }
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            leftIcon={
              <Feather name="lock" size={16} color={colors.mutedForeground} />
            }
            rightIcon={
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={16}
                color={colors.mutedForeground}
              />
            }
            onRightIconPress={() => setShowPassword((v) => !v)}
          />
          <Text
            style={[
              styles.link,
              { color: colors.primary, marginTop: spacing.xs },
            ]}
          >
            Forgot password?
          </Text>
        </View>
      </DemoSection>

      {/* Profile Form */}
      <DemoSection label="Create Account">
        <View style={{ gap: spacing.md }}>
          <Input
            label="Full Name"
            placeholder="Jane Smith"
            value={name}
            onChangeText={setName}
            leftIcon={
              <Feather name="user" size={16} color={colors.mutedForeground} />
            }
          />
          <Input
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChangeText={setPhone}
            inputMode="tel"
            keyboardType="phone-pad"
            leftIcon={
              <Feather name="phone" size={16} color={colors.mutedForeground} />
            }
            hint="We'll only use this for account recovery."
          />
        </View>
      </DemoSection>

      {/* Error State */}
      <DemoSection label="Validation">
        <Input
          label="Email"
          placeholder="you@example.com"
          value="invalid-email"
          inputMode="email"
          error="Please enter a valid email address."
        />
      </DemoSection>

      {/* Ghost Search */}
      <DemoSection label="Quick Search">
        <Input
          placeholder="Search anything…"
          variant="ghost"
          leftIcon={
            <Feather name="search" size={16} color={colors.mutedForeground} />
          }
        />
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 13,
    fontWeight: "500",
    alignSelf: "flex-end",
  },
});
