import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { Text, View } from "react-native";
import { THEME, useTheme } from "@/lib/theme";

export default function InputOTPDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [phoneCode, setPhoneCode] = useState("");
  const [emailCode, setEmailCode] = useState("");

  const handlePhoneComplete = (code: string) => {
    console.log("Phone verification code:", code);
  };

  return (
    <DemoScreen
      title="Input OTP"
      description="One-time password input with animated slots and full accessibility support."
    >
      {/* Phone Verification */}
      <DemoSection label="Phone Verification">
        <View style={{ gap: spacing.md }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.mutedForeground,
              lineHeight: 20,
            }}
          >
            Enter the 6-digit code sent to +1 (555) 000-1234.
          </Text>
          <InputOTP
            maxLength={6}
            value={phoneCode}
            onChangeText={setPhoneCode}
            onComplete={handlePhoneComplete}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Text
            style={{
              fontSize: 13,
              color: colors.primary,
              fontWeight: "500",
            }}
          >
            Resend code in 0:58
          </Text>
        </View>
      </DemoSection>

      {/* Email Verification with Separator */}
      <DemoSection label="Email Confirmation">
        <View style={{ gap: spacing.md }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.mutedForeground,
              lineHeight: 20,
            }}
          >
            We sent a security code to j***@company.com.
          </Text>
          <InputOTP maxLength={6} value={emailCode} onChangeText={setEmailCode}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </View>
      </DemoSection>

      {/* Short PIN */}
      <DemoSection label="App PIN">
        <View style={{ gap: spacing.md }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.mutedForeground,
              lineHeight: 20,
            }}
          >
            Enter your 4-digit PIN to unlock the app.
          </Text>
          <InputOTP maxLength={4} value="" onChangeText={() => {}}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
