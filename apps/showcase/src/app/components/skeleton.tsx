import Skeleton from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { View, Text } from "react-native";

const ARTICLE_LINES = [
  { width: "100%" as const },
  { width: "90%" as const },
  { width: "75%" as const },
  { width: "85%" as const },
  { width: "60%" as const },
];

const COMMENT_LINES = [
  { width: "40%" as const },
  { width: "100%" as const },
  { width: "80%" as const },
];

export default function SkeletonDemo() {
  return (
    <DemoScreen
      title="Skeleton"
      description="An animated placeholder that mimics content layout during loading states."
    >
      <DemoSection label="Article Skeleton">
        <View
          style={{
            gap: 16,
            padding: 16,
            backgroundColor: "#f4f4f5",
            borderRadius: 12,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <Skeleton style={{ width: 48, height: 48, borderRadius: 24 }} />
            <View style={{ flex: 1, gap: 6 }}>
              <Skeleton style={{ height: 14, width: "50%" }} />
              <Skeleton style={{ height: 12, width: "30%" }} />
            </View>
          </View>
          {/* Title */}
          <Skeleton style={{ height: 22, width: "85%" }} />
          <Skeleton style={{ height: 22, width: "60%" }} />
          {/* Content */}
          {ARTICLE_LINES.map((line, i) => (
            <Skeleton key={i} style={{ height: 14, ...line }} />
          ))}
          {/* Tags */}
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Skeleton style={{ height: 24, width: 64, borderRadius: 12 }} />
            <Skeleton style={{ height: 24, width: 80, borderRadius: 12 }} />
          </View>
        </View>
      </DemoSection>

      <DemoSection label="User Profile Card Skeleton">
        <View
          style={{ padding: 16, backgroundColor: "#f4f4f5", borderRadius: 12 }}
        >
          <View style={{ alignItems: "center", gap: 12 }}>
            <Skeleton style={{ width: 72, height: 72, borderRadius: 36 }} />
            <Skeleton style={{ height: 18, width: "50%" }} />
            <Skeleton style={{ height: 14, width: "35%" }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 24,
              marginTop: 16,
            }}
          >
            <View style={{ alignItems: "center", gap: 4 }}>
              <Skeleton style={{ height: 20, width: 32 }} />
              <Skeleton style={{ height: 12, width: 40 }} />
            </View>
            <View style={{ alignItems: "center", gap: 4 }}>
              <Skeleton style={{ height: 20, width: 32 }} />
              <Skeleton style={{ height: 12, width: 40 }} />
            </View>
            <View style={{ alignItems: "center", gap: 4 }}>
              <Skeleton style={{ height: 20, width: 32 }} />
              <Skeleton style={{ height: 12, width: 40 }} />
            </View>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Comment Item Skeleton">
        <View style={{ gap: 12 }}>
          {["1", "2", "3"].map((i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                gap: 12,
                padding: 12,
                backgroundColor: "#f4f4f5",
                borderRadius: 12,
              }}
            >
              <Skeleton style={{ width: 36, height: 36, borderRadius: 18 }} />
              <View style={{ flex: 1, gap: 8 }}>
                <Skeleton style={{ height: 12, width: "30%" }} />
                {COMMENT_LINES.map((line, j) => (
                  <Skeleton key={j} style={{ height: 13, ...line }} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </DemoSection>

      <DemoSection label="Simple Line Skeletons">
        <View style={{ gap: 10 }}>
          <Skeleton style={{ height: 16, width: "90%" }} />
          <Skeleton style={{ height: 16, width: "75%" }} />
          <Skeleton style={{ height: 16, width: "85%" }} />
          <Skeleton style={{ height: 16, width: "60%" }} />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
