import { Toaster, toast } from "@/components/ui/sonner";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { THEME, useTheme } from "@/lib/theme";
import { View } from "react-native";

export default function SonnerDemo() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];

  return (
    <DemoScreen
      title="Sonner Toast"
      description="Non-blocking notification toasts for feedback, confirmations, and background events."
    >
      <DemoSection label="Trigger Toasts">
        <View style={{ gap: 12 }}>
          <Button
            title="Payment Succeeded"
            onPress={() =>
              toast.success("Payment processed", {
                description: "Your Pro subscription is now active.",
              })
            }
          />
          <Button
            title="Item Deleted"
            variant="outline"
            onPress={() =>
              toast.error("Item removed", {
                description: "The file was moved to trash.",
                action: {
                  label: "Undo",
                  onClick: () => toast("Restored"),
                },
              })
            }
          />
          <Button
            title="Sync in Progress"
            variant="outline"
            onPress={() =>
              toast.loading("Syncing your data...", {
                description: "This may take a few moments.",
              })
            }
          />
          <Button
            title="Settings Saved"
            variant="outline"
            onPress={() =>
              toast.success("Preferences updated", {
                description: "Your display settings have been applied.",
              })
            }
          />
          <Button
            title="Upload Warning"
            variant="outline"
            onPress={() =>
              toast.warning("Large file selected", {
                description: "Files over 100MB may take longer to upload.",
              })
            }
          />
        </View>
      </DemoSection>

      <Toaster />
    </DemoScreen>
  );
}
