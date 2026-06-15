import Separator from "@/components/ui/separator";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { View, Text } from "react-native";

export default function SeparatorDemo() {
  return (
    <DemoScreen
      title="Separator"
      description="A horizontal or vertical divider line with optional center label."
    >
      <DemoSection label="Settings Section">
        <View style={{ gap: 16 }}>
          <View style={{ gap: 12 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Account</Text>
            <Text style={{ fontSize: 14, color: "#71717a", lineHeight: 20 }}>
              Manage your account settings and preferences.
            </Text>
          </View>
          <Separator />
          <View style={{ gap: 12 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>
              Notifications
            </Text>
            <Text style={{ fontSize: 14, color: "#71717a", lineHeight: 20 }}>
              Configure push notifications and email alerts.
            </Text>
          </View>
          <Separator />
          <View style={{ gap: 12 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>
              Privacy & Security
            </Text>
            <Text style={{ fontSize: 14, color: "#71717a", lineHeight: 20 }}>
              Control your data and security settings.
            </Text>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Price Breakdown">
        <View
          style={{
            gap: 12,
            padding: 16,
            backgroundColor: "#f4f4f5",
            borderRadius: 12,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, color: "#71717a" }}>Subscription</Text>
            <Text style={{ fontSize: 14, color: "#09090b" }}>$12.00</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, color: "#71717a" }}>Tax</Text>
            <Text style={{ fontSize: 14, color: "#09090b" }}>$0.96</Text>
          </View>
          <Separator spacing={8} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Total</Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>$12.96</Text>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="With Label">
        <View style={{ gap: 16 }}>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#e4e4e7" }} />
            <Text style={{ fontSize: 12, color: "#71717a", fontWeight: "500" }}>
              OR
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#e4e4e7" }} />
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{
                flex: 1,
                height: 44,
                backgroundColor: "#f4f4f5",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "#71717a" }}>Google</Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 44,
                backgroundColor: "#f4f4f5",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "#71717a" }}>Apple</Text>
            </View>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Vertical Separator">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <View style={{ flex: 1, gap: 8 }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Monthly</Text>
            <Text style={{ fontSize: 13, color: "#71717a" }}>$9.99/mo</Text>
          </View>
          <Separator orientation="vertical" style={{ height: 40 }} />
          <View style={{ flex: 1, gap: 8 }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Annual</Text>
            <Text style={{ fontSize: 13, color: "#71717a" }}>$99.99/yr</Text>
          </View>
          <Separator orientation="vertical" style={{ height: 40 }} />
          <View style={{ flex: 1, gap: 8 }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Lifetime</Text>
            <Text style={{ fontSize: 13, color: "#71717a" }}>$299.99</Text>
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
