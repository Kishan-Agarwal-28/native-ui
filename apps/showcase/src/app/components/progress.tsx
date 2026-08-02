import Progress from "@/components/ui/progress";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { THEME, useTheme } from "@/lib/theme";
import Button from "@/components/ui/button";

export default function ProgressDemo() {
  const { theme } = useTheme();
  const { colors, spacing, radius, typography } = THEME[theme];

  return (
    <DemoScreen
      title="Progress"
      description="Animated indicators for tracking completion status of operations and tasks."
    >
      <DemoSection label="File Operations">
        <UploadProgress
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Data Sync">
        <SyncProgress
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Goal Tracking">
        <GoalProgress
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>
    </DemoScreen>
  );
}

function UploadProgress({ colors, spacing, radius, typography }: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: radius.lg,
        padding: spacing.lg,
        gap: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
          }}
        >
          <Feather name="file" size={16} color={colors.mutedForeground} />
          <Text
            style={{
              color: colors.foreground,
              fontSize: typography.sm,
              fontWeight: "500",
            }}
          >
            report-q4-2024.pdf
          </Text>
        </View>
        <Text
          style={{ color: colors.mutedForeground, fontSize: typography.sm }}
        >
          {Math.round(Math.min(progress, 100))}%
        </Text>
      </View>
      <Progress value={progress} />
      <Text style={{ color: colors.mutedForeground, fontSize: typography.xs }}>
        {progress >= 100 ? "Upload complete" : "Uploading to cloud storage..."}
      </Text>
    </View>
  );
}

function SyncProgress({ colors, spacing, radius, typography }: any) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Syncing contacts...");

  useEffect(() => {
    const steps = [
      { text: "Syncing contacts...", target: 25 },
      { text: "Syncing photos...", target: 55 },
      { text: "Syncing documents...", target: 80 },
      { text: "Finalizing...", target: 95 },
      { text: "Sync complete", target: 100 },
    ];
    let current = 0;

    const interval = setInterval(() => {
      if (current >= steps.length) {
        clearInterval(interval);
        return;
      }
      const step = steps[current];
      const start = current === 0 ? 0 : steps[current - 1].target;

      const innerInterval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 2;
          if (next >= step.target) {
            clearInterval(innerInterval);
            setStatus(step.text);
            return step.target;
          }
          return next;
        });
      }, 50);

      current++;
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: radius.lg,
        padding: spacing.lg,
        gap: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: spacing.sm }}
      >
        <Feather name="refresh-cw" size={16} color={colors.primary} />
        <Text
          style={{
            color: colors.foreground,
            fontSize: typography.sm,
            fontWeight: "500",
          }}
        >
          Cloud Sync
        </Text>
      </View>
      <Progress value={progress} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{ color: colors.mutedForeground, fontSize: typography.xs }}
        >
          {status}
        </Text>
        <Text
          style={{ color: colors.mutedForeground, fontSize: typography.xs }}
        >
          {Math.round(progress)}%
        </Text>
      </View>
    </View>
  );
}

function GoalProgress({ colors, spacing, radius, typography }: any) {
  const goals = [
    { label: "Daily Steps", current: 8430, target: 10000, unit: "steps" },
    { label: "Weekly Reading", current: 4, target: 5, unit: "books" },
    { label: "Monthly Savings", current: 1850, target: 2500, unit: "USD" },
  ];

  return (
    <View style={{ gap: spacing.lg }}>
      {goals.map((goal) => {
        const pct = Math.round((goal.current / goal.target) * 100);
        return (
          <View
            key={goal.label}
            style={{
              backgroundColor: colors.card,
              borderRadius: radius.lg,
              padding: spacing.lg,
              gap: spacing.sm,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.foreground,
                  fontSize: typography.sm,
                  fontWeight: "500",
                }}
              >
                {goal.label}
              </Text>
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                }}
              >
                {goal.current.toLocaleString()} / {goal.target.toLocaleString()}{" "}
                {goal.unit}
              </Text>
            </View>
            <Progress value={pct} />
          </View>
        );
      })}
    </View>
  );
}
