import Typography from "@/components/ui/typography";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { THEME, useTheme } from "@/lib/theme";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TypographyDemo() {
  const { theme } = useTheme();
  const { colors, spacing, radius, typography } = THEME[theme];

  return (
    <DemoScreen
      title="Typography"
      description="Consistent text styling for headings, body copy, captions, and code."
    >
      <DemoSection label="Article Preview">
        <View style={{ gap: spacing.lg }}>
          <Typography variant="h1" style={{ letterSpacing: -0.5 }}>
            The Future of Design Systems
          </Typography>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.muted,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="user" size={16} color={colors.mutedForeground} />
            </View>
            <View>
              <Typography
                variant="small"
                style={{ fontWeight: "600", color: colors.foreground }}
              >
                Maria Santos
              </Typography>
              <Typography
                variant="caption"
                style={{ color: colors.mutedForeground }}
              >
                Jan 15, 2025 · 6 min read
              </Typography>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: colors.border }} />
          <Typography variant="lead">
            Design systems have evolved from simple style guides into powerful
            tools that shape how teams build products at scale. Understanding
            their architecture is essential for modern development.
          </Typography>
          <Typography variant="p">
            A well-crafted design system centralizes typography, color, spacing,
            and components into a single source of truth. This approach reduces
            inconsistency, accelerates development, and improves collaboration
            between designers and engineers working on the same product.
          </Typography>
          <Typography variant="p">
            The most effective systems are not rigid rulebooks but flexible
            frameworks that grow with your product. They establish clear
            conventions while leaving room for creative expression and
            context-specific adaptation.
          </Typography>
        </View>
      </DemoSection>

      <DemoSection label="UI Text Hierarchy">
        <View style={{ gap: spacing.xs }}>
          <Typography variant="h1">Page Title</Typography>
          <Typography variant="h2">Section Heading</Typography>
          <Typography variant="h3">Subsection Title</Typography>
          <Typography variant="h4">Card Heading</Typography>
        </View>
      </DemoSection>

      <DemoSection label="Body Copy">
        <View style={{ gap: spacing.md }}>
          <Typography variant="p">
            Regular body text used for paragraphs and descriptive content. This
            is the default text style for most UI elements.
          </Typography>
          <Typography variant="lead">
            Lead text is slightly larger and used for introductory paragraphs
            that summarize the content below.
          </Typography>
          <Typography variant="large">
            Large text for emphasis within body copy, such as important callouts
            or highlighted information.
          </Typography>
          <Typography variant="small">
            Small text for supplementary information, metadata, and labels.
          </Typography>
          <Typography variant="muted">
            Muted text for secondary information, timestamps, and descriptions
            that should be visually subordinate.
          </Typography>
          <Typography variant="caption">
            Caption text for image captions, footnotes, and fine print.
          </Typography>
        </View>
      </DemoSection>

      <DemoSection label="Form & Interface Labels">
        <View style={{ gap: spacing.lg }}>
          <View style={{ gap: spacing.xs }}>
            <Typography variant="label">FULL NAME</Typography>
            <View
              style={{
                backgroundColor: colors.input,
                borderRadius: radius.md,
                padding: spacing.md,
              }}
            >
              <Typography variant="p" style={{ color: colors.mutedForeground }}>
                Alex Johnson
              </Typography>
            </View>
          </View>
          <View style={{ gap: spacing.xs }}>
            <Typography variant="label">EMAIL ADDRESS</Typography>
            <View
              style={{
                backgroundColor: colors.input,
                borderRadius: radius.md,
                padding: spacing.md,
              }}
            >
              <Typography variant="p" style={{ color: colors.mutedForeground }}>
                alex@example.com
              </Typography>
            </View>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Blockquote & Code">
        <View style={{ gap: spacing.lg }}>
          <Typography variant="blockquote">
            "Design is not just what it looks like and feels like. Design is how
            it works." — Steve Jobs
          </Typography>
          <View
            style={{
              backgroundColor: colors.muted,
              borderRadius: radius.md,
              padding: spacing.md,
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <Feather name="terminal" size={14} color={colors.mutedForeground} />
            <Typography variant="code">
              npx expo install @design-system/ui
            </Typography>
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
