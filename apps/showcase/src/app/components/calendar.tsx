import { Calendar } from "@/components/ui/calendar";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type BookedDate = {
  date: string;
  title: string;
  time: string;
  color: string;
};

const bookedDates: Record<string, BookedDate> = {
  "2025-03-05": {
    date: "2025-03-05",
    title: "Team Standup",
    time: "10:00 AM",
    color: "#3b82f6",
  },
  "2025-03-12": {
    date: "2025-03-12",
    title: "Project Review",
    time: "2:00 PM",
    color: "#8b5cf6",
  },
  "2025-03-20": {
    date: "2025-03-20",
    title: "Sprint Planning",
    time: "9:30 AM",
    color: "#10b981",
  },
  "2025-03-28": {
    date: "2025-03-28",
    title: "Client Demo",
    time: "11:00 AM",
    color: "#f59e0b",
  },
};

function EventCalendar() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];
  const [selected, setSelected] = useState("2025-03-15");

  const markedDates: Record<string, object> = {};

  // Mark booked dates with dots
  Object.keys(bookedDates).forEach((date) => {
    markedDates[date] = {
      marked: true,
      dotColor: bookedDates[date].color,
    };
  });

  // Mark selected date
  markedDates[selected] = {
    ...(markedDates[selected] || {}),
    selected: true,
    selectedColor: colors.primary,
  };

  const selectedEvent = bookedDates[selected];

  return (
    <View>
      <Calendar
        current="2025-03"
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={markedDates}
        markingType="multi-dot"
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.card,
          textSectionTitleColor: colors.mutedForeground,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.background,
          todayTextColor: colors.primary,
          dayTextColor: colors.foreground,
          textDisabledColor: colors.muted,
          dotColor: colors.primary,
          arrowColor: colors.primary,
          monthTextColor: colors.foreground,
          textDayFontWeight: "500",
          textMonthFontWeight: "700",
          textDayHeaderFontWeight: "600",
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
      />
      <View
        style={[
          styles.eventInfo,
          {
            backgroundColor: colors.card,
            borderTopWidth: 1,
            borderTopColor: colors.border,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            color: colors.mutedForeground,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginBottom: 8,
          }}
        >
          {selected === "2025-03-15"
            ? "Today"
            : new Date(selected + "T00:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
        </Text>
        {selectedEvent ? (
          <View style={styles.eventCard}>
            <View
              style={[
                styles.eventDot,
                { backgroundColor: selectedEvent.color },
              ]}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.foreground,
                }}
              >
                {selectedEvent.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.mutedForeground,
                  marginTop: 2,
                }}
              >
                {selectedEvent.time}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={{ fontSize: 14, color: colors.mutedForeground }}>
            No events scheduled
          </Text>
        )}
      </View>
    </View>
  );
}

function RangeCalendar() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];

  const markedDates = {
    "2025-04-01": {
      startingDay: true,
      color: colors.primary,
      textColor: colors.background,
    },
    "2025-04-02": { color: colors.muted, textColor: colors.foreground },
    "2025-04-03": { color: colors.muted, textColor: colors.foreground },
    "2025-04-04": {
      endingDay: true,
      color: colors.primary,
      textColor: colors.background,
    },
  };

  return (
    <Calendar
      current="2025-04"
      markingType="period"
      markedDates={markedDates}
      theme={{
        backgroundColor: colors.background,
        calendarBackground: colors.card,
        textSectionTitleColor: colors.mutedForeground,
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: colors.background,
        todayTextColor: colors.primary,
        dayTextColor: colors.foreground,
        textDisabledColor: colors.muted,
        arrowColor: colors.primary,
        monthTextColor: colors.foreground,
        textDayFontWeight: "500",
        textMonthFontWeight: "700",
        textDayHeaderFontWeight: "600",
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 12,
      }}
    />
  );
}

function CompactCalendar() {
  const { theme } = useTheme();
  const { colors } = THEME[theme];
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      onDayPress={(day) => setSelected(day.dateString)}
      markedDates={{
        [selected]: { selected: true, selectedColor: colors.primary },
      }}
      theme={{
        backgroundColor: colors.background,
        calendarBackground: colors.card,
        textSectionTitleColor: colors.mutedForeground,
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: colors.background,
        todayTextColor: colors.primary,
        dayTextColor: colors.foreground,
        textDisabledColor: colors.muted,
        arrowColor: colors.primary,
        monthTextColor: colors.foreground,
        textDayFontWeight: "500",
        textMonthFontWeight: "700",
        textDayHeaderFontWeight: "600",
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 12,
      }}
    />
  );
}

export default function CalendarDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <DemoScreen
      title="Calendar"
      description="A fully themed calendar with date selection, marked dates, and range selection support."
    >
      <DemoSection label="Event Scheduler">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          View and manage your scheduled meetings and events.
        </Text>
        <View
          style={{
            borderRadius: 16,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <EventCalendar />
        </View>
      </DemoSection>

      <DemoSection label="Date Range">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Select a range of consecutive days for trip planning or availability.
        </Text>
        <View
          style={{
            borderRadius: 16,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <RangeCalendar />
        </View>
      </DemoSection>

      <DemoSection label="Simple Selection">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Basic date selection with a single highlighted day.
        </Text>
        <View
          style={{
            borderRadius: 16,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <CompactCalendar />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  eventInfo: {
    padding: 16,
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  eventDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
