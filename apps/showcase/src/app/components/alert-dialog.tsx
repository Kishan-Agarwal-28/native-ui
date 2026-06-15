import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { THEME, useTheme } from "@/lib/theme";

export default function AlertDialogDemo() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];

  return (
    <DemoScreen
      title="Alert Dialog"
      description="Critical confirmations that interrupt the user before destructive or irreversible actions."
    >
      <DemoSection label="Account Actions">
        <DeleteAccountDialog colors={colors} />
      </DemoSection>

      <DemoSection label="Data Management">
        <DiscardChangesDialog colors={colors} />
        <ClearCacheDialog colors={colors} />
      </DemoSection>

      <DemoSection label="Bulk Operations">
        <DeleteSelectedDialog colors={colors} />
      </DemoSection>
    </DemoScreen>
  );
}

function DeleteAccountDialog({ colors }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Delete Account"
        variant="destructive"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <View />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently erase all your data, including your profile,
              settings, and activity history. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button title="Cancel" variant="outline" />
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button title="Delete Account" variant="destructive" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}

function DiscardChangesDialog({ colors }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Discard Draft"
        variant="outline"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <View />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have 3 edits that haven't been saved. Leaving this page will
              lose all your progress.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button title="Keep Editing" variant="outline" />
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button title="Discard" variant="destructive" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}

function ClearCacheDialog({ colors }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Clear App Cache"
        variant="outline"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <View />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear cached data?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove 142 MB of temporary files. You may need to
              re-login after clearing the cache.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button title="Cancel" variant="outline" />
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button title="Clear Cache" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}

function DeleteSelectedDialog({ colors }: any) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button
        title="Delete Selected (5)"
        variant="outline"
        onPress={() => setOpen(true)}
        containerStyle={{ alignSelf: "flex-start" }}
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <View />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete 5 items?</AlertDialogTitle>
            <AlertDialogDescription>
              The selected messages will be permanently removed from your inbox
              and cannot be recovered.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button title="Cancel" variant="outline" />
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button title="Delete All" variant="destructive" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
}
