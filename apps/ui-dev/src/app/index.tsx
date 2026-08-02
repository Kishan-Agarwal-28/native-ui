import Badge from "@/components/ui/badge";
import ThemeToggle from "@/components/ui/theme-toggle";

import { THEME } from "@/lib/theme";
import useStyles from "@/lib/use-styles";
import { Text, View } from "react-native";

export default function Index() {
  const styles = useStyles((t) => ({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: THEME[t].colors.card,
    },
    text: {
      fontSize: THEME[t].typography.base,
      color: THEME[t].colors.foreground,
    },
  }));
  return (
    <View style={styles.container}>
      <ThemeToggle
        type="toggle"
        animate
        showDateTimeOptions
        timeRanges={{
          dayStart: "10:00",
          nightStart: "11:00",
        }}
      />
      <Badge label="Default" variant="default" />
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}
