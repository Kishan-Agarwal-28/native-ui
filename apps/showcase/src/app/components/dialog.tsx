import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { THEME, useTheme } from "@/lib/theme";

export default function DialogDemo() {
  const { theme } = useTheme();
  const { colors, spacing, radius, typography } = THEME[theme];

  return (
    <DemoScreen
      title="Dialog"
      description="Modal overlays that require user attention or input before proceeding."
    >
      <DemoSection label="Edit Profile">
        <ProfileEditDialog
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Share Content">
        <ShareDialog
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Subscribe to Plan">
        <SubscribeDialog
          colors={colors}
          spacing={spacing}
          radius={radius}
          typography={typography}
        />
      </DemoSection>
    </DemoScreen>
  );
}

function ProfileEditDialog({ colors, spacing, radius, typography }: any) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@example.com");

  return (
    <View>
      <Button
        title="Edit Profile"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information and public profile details.
            </DialogDescription>
          </DialogHeader>
          <View style={{ gap: spacing.md }}>
            <View>
              <Text
                style={[
                  labelStyle(typography, colors),
                  { marginBottom: spacing.xs },
                ]}
              >
                Full Name
              </Text>
              <View
                style={[inputStyle(colors, radius), { padding: spacing.md }]}
              >
                <Text
                  style={{
                    color: colors.foreground,
                    fontSize: typography.base,
                  }}
                >
                  {name}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  labelStyle(typography, colors),
                  { marginBottom: spacing.xs },
                ]}
              >
                Email Address
              </Text>
              <View
                style={[inputStyle(colors, radius), { padding: spacing.md }]}
              >
                <Text
                  style={{
                    color: colors.foreground,
                    fontSize: typography.base,
                  }}
                >
                  {email}
                </Text>
              </View>
            </View>
          </View>
          <DialogFooter>
            <Button
              title="Cancel"
              variant="outline"
              onPress={() => setOpen(false)}
            />
            <Button title="Save Changes" onPress={() => setOpen(false)} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}

function ShareDialog({ colors, spacing, radius, typography }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Share Article"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Article</DialogTitle>
            <DialogDescription>
              Send this article to friends or post it on social media.
            </DialogDescription>
          </DialogHeader>
          <View
            style={{
              flexDirection: "row",
              gap: spacing.lg,
              paddingVertical: spacing.sm,
            }}
          >
            {[
              { icon: "message-circle", label: "Messages" },
              { icon: "mail", label: "Email" },
              { icon: "link", label: "Copy Link" },
              { icon: "twitter", label: "Twitter" },
            ].map((item) => (
              <View
                key={item.label}
                style={{ alignItems: "center", gap: spacing.xs }}
              >
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: radius.lg,
                    backgroundColor: colors.muted,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather
                    name={item.icon as any}
                    size={22}
                    color={colors.foreground}
                  />
                </View>
                <Text
                  style={{
                    fontSize: typography.xs,
                    color: colors.mutedForeground,
                  }}
                >
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
          <DialogFooter>
            <Button title="Done" onPress={() => setOpen(false)} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}

function SubscribeDialog({ colors, spacing, radius, typography }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Upgrade Plan"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unlock Premium</DialogTitle>
            <DialogDescription>
              Get unlimited access to all articles and exclusive content.
            </DialogDescription>
          </DialogHeader>
          <View
            style={{
              backgroundColor: colors.muted,
              borderRadius: radius.lg,
              padding: spacing.lg,
              gap: spacing.sm,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                }}
              >
                Pro Plan
              </Text>
              <Text
                style={{
                  color: colors.foreground,
                  fontSize: typography.sm,
                  fontWeight: "600",
                }}
              >
                $9.99/mo
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                }}
              >
                Billed monthly
              </Text>
              <Text
                style={{ color: colors.foreground, fontSize: typography.sm }}
              >
                Cancel anytime
              </Text>
            </View>
          </View>
          <DialogFooter>
            <Button
              title="Not Now"
              variant="ghost"
              onPress={() => setOpen(false)}
            />
            <Button title="Subscribe" onPress={() => setOpen(false)} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}

const labelStyle = (typography: any, colors: any) => ({
  fontSize: typography.sm,
  fontWeight: "500" as const,
  color: colors.foreground,
});

const inputStyle = (colors: any, radius: any) => ({
  backgroundColor: colors.input,
  borderRadius: radius.md,
});
