import { useState } from "react";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function ButtonDemo() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubscribed(true);
  };

  return (
    <DemoScreen
      title="Button"
      description="An animated, accessible button with multiple variants, loading state, and press effects."
    >
      <DemoSection label="Newsletter Signup">
        <View style={{ gap: 12 }}>
          <Text style={{ fontSize: 15, color: "#71717a" }}>
            Get weekly product updates and tips delivered to your inbox.
          </Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Button
              title={isLoading ? "Subscribing..." : "Subscribe"}
              loading={isLoading}
              disabled={isLoading || subscribed}
              onPress={handleSubscribe}
            />
            {subscribed && (
              <Button title="Subscribed!" variant="outline" disabled />
            )}
          </View>
        </View>
      </DemoSection>

      <DemoSection label="Social Sharing">
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <Button variant="outline" onPress={() => {}}>
            <Feather name="twitter" size={16} color="#18181b" />
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#18181b" }}>
              Share to X
            </Text>
          </Button>
          <Button variant="outline" onPress={() => {}}>
            <Feather name="link" size={16} color="#18181b" />
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#18181b" }}>
              Copy Link
            </Text>
          </Button>
          <Button variant="outline" onPress={() => {}}>
            <Feather name="mail" size={16} color="#18181b" />
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#18181b" }}>
              Email
            </Text>
          </Button>
        </View>
      </DemoSection>

      <DemoSection label="Destructive Actions">
        <View style={{ gap: 8 }}>
          <Button
            title="Delete Account"
            variant="destructive"
            onPress={() => {}}
          />
          <Button title="Remove All Items" variant="ghost" onPress={() => {}} />
        </View>
      </DemoSection>

      <DemoSection label="Sizes">
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Button
            title="Small"
            variant="outline"
            buttonStyle={{ paddingVertical: 6, paddingHorizontal: 12 }}
          />
          <Button title="Medium" variant="outline" />
          <Button
            title="Large"
            variant="outline"
            buttonStyle={{ paddingVertical: 14, paddingHorizontal: 24 }}
          />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
