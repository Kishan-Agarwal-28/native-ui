import { ButtonGroup } from "@/components/ui/button-group";
import { ButtonGroupText } from "@/components/ui/button-group";
import Button from "@/components/ui/button";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function ButtonGroupDemo() {
  return (
    <DemoScreen
      title="Button Group"
      description="A layout primitive that joins multiple buttons into a connected row or column."
    >
      <DemoSection label="Text Formatting Toolbar">
        <View style={{ flexDirection: "row", gap: 0 }}>
          <ButtonGroup orientation="horizontal">
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="bold" size={16} color="#18181b" />
            </Button>
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="italic" size={16} color="#18181b" />
            </Button>
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="underline" size={16} color="#18181b" />
            </Button>
          </ButtonGroup>
          <View
            style={{
              width: 1,
              backgroundColor: "#e4e4e7",
              marginHorizontal: 8,
            }}
          />
          <ButtonGroup orientation="horizontal">
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="align-left" size={16} color="#18181b" />
            </Button>
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="align-center" size={16} color="#18181b" />
            </Button>
            <Button variant="ghost" onPress={() => {}}>
              <Feather name="align-right" size={16} color="#18181b" />
            </Button>
          </ButtonGroup>
        </View>
      </DemoSection>

      <DemoSection label="Date Range Selector">
        <ButtonGroup orientation="horizontal">
          <Button title="Today" variant="outline" />
          <Button title="7 Days" variant="outline" />
          <Button title="30 Days" variant="outline" />
          <Button title="Custom" variant="outline" />
        </ButtonGroup>
      </DemoSection>

      <DemoSection label="Filter Actions">
        <View style={{ gap: 8 }}>
          <ButtonGroup orientation="horizontal">
            <ButtonGroupText>Sort by:</ButtonGroupText>
            <Button title="Recent" variant="outline" />
            <Button title="Popular" variant="outline" />
          </ButtonGroup>
          <ButtonGroup orientation="horizontal">
            <ButtonGroupText>Status:</ButtonGroupText>
            <Button title="All" variant="outline" />
            <Button title="Active" variant="outline" />
            <Button title="Archived" variant="outline" />
          </ButtonGroup>
        </View>
      </DemoSection>

      <DemoSection label="Vertical Navigation">
        <ButtonGroup orientation="vertical" style={{ maxWidth: 200 }}>
          <Button title="Profile" variant="outline" />
          <Button title="Security" variant="outline" />
          <Button title="Notifications" variant="outline" />
          <Button title="Billing" variant="outline" />
        </ButtonGroup>
      </DemoSection>
    </DemoScreen>
  );
}
