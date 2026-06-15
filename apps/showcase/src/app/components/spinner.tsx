import Spinner from "@/components/ui/spinner";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View, Text } from "react-native";

export default function SpinnerDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateSave = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false);
  };

  return (
    <DemoScreen
      title="Spinner"
      description="A rotating loading indicator with configurable size, color, and border thickness."
    >
      <DemoSection label="Loading a Button Action">
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 14, color: "#71717a" }}>
            Saving your profile changes...
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Button
              title={isLoading ? "Saving..." : "Save Changes"}
              loading={isLoading}
              disabled={isLoading}
              onPress={simulateSave}
            />
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Inline Loading Text">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Spinner size="sm" />
          <Text style={{ fontSize: 14, color: "#71717a" }}>
            Processing payment...
          </Text>
        </View>
      </DemoSection>

      <DemoSection label="Centered Screen Loading">
        <View
          style={{
            height: 160,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f4f4f5",
            borderRadius: 12,
          }}
        >
          <Spinner size="lg" />
          <Text style={{ marginTop: 12, fontSize: 14, color: "#71717a" }}>
            Loading your feed...
          </Text>
        </View>
      </DemoSection>

      <DemoSection label="All Sizes">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner size="sm" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>sm</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner size="default" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>default</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner size="lg" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>lg</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner size={48} />
            <Text style={{ fontSize: 12, color: "#71717a" }}>48px</Text>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Custom Colors">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner color="#1447e6" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>Blue</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner color="#16a34a" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>Green</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner color="#dc2626" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>Red</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Spinner color="#d97706" />
            <Text style={{ fontSize: 12, color: "#71717a" }}>Amber</Text>
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
