import Badge from "@/components/ui/badge";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function BadgeDemo() {
  return (
    <DemoScreen
      title="Badge"
      description="A small status indicator for displaying categories, labels, or counts."
    >
      <DemoSection label="Notification Counts">
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Badge label="3" variant="destructive" />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Unread</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Badge label="12" variant="secondary" />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Pending</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Badge label="99+" variant="default" />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Messages</Text>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Order Status">
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Badge
            label="Delivered"
            variant="default"
            icon={<Feather name="check-circle" size={10} color="#fafafa" />}
          />
          <Badge
            label="Processing"
            variant="secondary"
            icon={<Feather name="clock" size={10} color="#18181b" />}
          />
          <Badge
            label="Shipped"
            variant="outline"
            icon={<Feather name="truck" size={10} color="#71717a" />}
          />
          <Badge
            label="Cancelled"
            variant="destructive"
            icon={<Feather name="x-circle" size={10} color="#fafafa" />}
          />
        </View>
      </DemoSection>

      <DemoSection label="Feature Labels">
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <Badge label="New" variant="default" />
            <Badge label="Beta" variant="secondary" />
            <Badge label="Pro" variant="outline" />
            <Badge label="Enterprise" variant="ghost" />
          </View>
          <Text style={{ fontSize: 13, color: "#71717a" }}>
            Use badges to highlight plan tiers, new features, or feature flags.
          </Text>
        </View>
      </DemoSection>

      <DemoSection label="All Variants">
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Badge label="Default" variant="default" />
          <Badge label="Secondary" variant="secondary" />
          <Badge label="Destructive" variant="destructive" />
          <Badge label="Outline" variant="outline" />
          <Badge label="Ghost" variant="ghost" />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
