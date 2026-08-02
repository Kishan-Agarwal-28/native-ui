import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import Button from "@/components/ui/button";
import { Feather } from "@expo/vector-icons";
import { THEME, useTheme } from "@/lib/theme";
import { View } from "react-native";

export default function AlertDemo() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];

  return (
    <DemoScreen
      title="Alert"
      description="Inline notifications for feedback, warnings, and system status messages."
    >
      <DemoSection label="Errors & Failures">
        <Alert variant="destructive">
          <Feather name="alert-circle" size={18} color={colors.destructive} />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>
            We couldn't process your card ending in 4242. Please check your
            payment details or try a different card.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <Feather name="x-circle" size={18} color={colors.destructive} />
          <AlertTitle>Connection lost</AlertTitle>
          <AlertDescription>
            Unable to sync your data. Changes will be saved locally until you're
            back online.
          </AlertDescription>
          <AlertAction>
            <Button
              title="Retry"
              variant="destructive"
              buttonStyle={{ paddingHorizontal: 12, height: 32 }}
            />
          </AlertAction>
        </Alert>
      </DemoSection>

      <DemoSection label="Warnings">
        <Alert variant="warning">
          <Feather name="alert-triangle" size={18} color="#d97706" />
          <AlertTitle>Session expiring soon</AlertTitle>
          <AlertDescription>
            Your session will expire in 5 minutes. Save your work to avoid
            losing unsaved changes.
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <Feather name="alert-triangle" size={18} color="#d97706" />
          <AlertTitle>Low storage space</AlertTitle>
          <AlertDescription>
            You have only 512 MB remaining. Consider clearing some files to keep
            your device running smoothly.
          </AlertDescription>
        </Alert>
      </DemoSection>

      <DemoSection label="Success">
        <Alert variant="success">
          <Feather name="check-circle" size={18} color="#16a34a" />
          <AlertTitle>Profile updated</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully. Your profile is now
            visible to other users.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <Feather name="download" size={18} color="#16a34a" />
          <AlertTitle>Download complete</AlertTitle>
          <AlertDescription>
            "Q4 Financial Report.pdf" has been downloaded and is available
            offline.
          </AlertDescription>
        </Alert>
      </DemoSection>

      <DemoSection label="Information">
        <Alert variant="info">
          <Feather name="info" size={18} color="#2563eb" />
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            Dark mode is now available! Toggle it from your profile settings at
            any time.
          </AlertDescription>
        </Alert>
        <Alert variant="default">
          <Feather name="shield" size={18} color={colors.mutedForeground} />
          <AlertTitle>Two-factor auth recommended</AlertTitle>
          <AlertDescription>
            Add an extra layer of security to your account by enabling 2FA in
            your security settings.
          </AlertDescription>
        </Alert>
      </DemoSection>
    </DemoScreen>
  );
}
