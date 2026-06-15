import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View } from "react-native";
import { THEME, useTheme } from "@/lib/theme";

export default function LabelDemo() {
  const { theme } = useTheme();
  const { spacing } = THEME[theme];

  const [name, setName] = useState("");

  return (
    <DemoScreen
      title="Label"
      description="Accessible form label with optional required indicator and disabled state."
    >
      {/* Required Field */}
      <DemoSection label="Required Fields">
        <View style={{ gap: spacing.lg }}>
          <View style={{ gap: spacing.sm }}>
            <Label required>Full Name</Label>
            <Input
              placeholder="Jane Smith"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={{ gap: spacing.sm }}>
            <Label required>Bio</Label>
            <Textarea
              placeholder="Write a short bio…"
              style={{ minHeight: 80 }}
            />
          </View>
        </View>
      </DemoSection>

      {/* Optional Field */}
      <DemoSection label="Optional Field">
        <View style={{ gap: spacing.sm }}>
          <Label>Display Name</Label>
          <Input placeholder="How should we call you?" />
        </View>
      </DemoSection>

      {/* Disabled Field */}
      <DemoSection label="Disabled Field">
        <View style={{ gap: spacing.sm }}>
          <Label disabled>Account ID</Label>
          <Input value="usr_8f3k2m91" disabled />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
