import {
  FieldSet,
  FieldLegend,
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import Input from "@/components/ui/input";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME, useTheme } from "@/lib/theme";
import { Textarea } from "@/components/ui/textarea";

export default function FieldDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  return (
    <DemoScreen
      title="Field"
      description="Flexible form field wrapper with label, description, error message, and group support."
    >
      {/* Personal Info */}
      <DemoSection label="Contact Details">
        <FieldSet>
          <FieldLegend>Personal Information</FieldLegend>
          <FieldGroup>
            <View style={{ gap: spacing.sm }}>
              <FieldLabel>Full Name</FieldLabel>
              <Input
                placeholder="Jane Smith"
                value={name}
                onChangeText={setName}
                leftIcon={
                  <Feather
                    name="user"
                    size={16}
                    color={colors.mutedForeground}
                  />
                }
              />
            </View>
            <View style={{ gap: spacing.sm }}>
              <FieldLabel>Work Email</FieldLabel>
              <Input
                placeholder="jane@company.com"
                value={email}
                onChangeText={setEmail}
                inputMode="email"
                leftIcon={
                  <Feather
                    name="mail"
                    size={16}
                    color={colors.mutedForeground}
                  />
                }
              />
              <FieldDescription>
                We'll never share your email with anyone else.
              </FieldDescription>
            </View>
            <View style={{ gap: spacing.sm }}>
              <FieldLabel>Company</FieldLabel>
              <Input
                placeholder="Acme Corp"
                value={company}
                onChangeText={setCompany}
                leftIcon={
                  <Feather
                    name="briefcase"
                    size={16}
                    color={colors.mutedForeground}
                  />
                }
              />
            </View>
          </FieldGroup>
        </FieldSet>
      </DemoSection>

      {/* Form with Errors */}
      <DemoSection label="Submit a Ticket">
        <FieldSet>
          <FieldGroup>
            <Field error="Subject is required.">
              <FieldLabel>Subject *</FieldLabel>
              <Input placeholder="Brief description of the issue" />
              <FieldError />
            </Field>
            <Field>
              <FieldLabel>Details</FieldLabel>
              <Textarea
                placeholder="Describe the problem in detail…"
                style={{ minHeight: 96 }}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
