import { DatePicker } from "@/components/ui/date-picker";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ComponentProps<typeof Feather>["name"];
};

function FormField({
  label,
  placeholder,
  value,
  onChange,
  icon,
}: FormFieldProps) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View style={{ marginBottom: spacing.lg }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "600",
          color: colors.foreground,
          marginBottom: spacing.sm,
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>
      <View style={{ position: "relative" }}>
        {icon && (
          <View
            style={{
              position: "absolute",
              left: 14,
              top: 0,
              bottom: 0,
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Feather name={icon} size={18} color={colors.mutedForeground} />
          </View>
        )}
        <DatePicker
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={icon ? { paddingLeft: 44 } : undefined}
        />
      </View>
    </View>
  );
}

function AppointmentForm() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.md,
          marginBottom: spacing.lg,
        }}
      >
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="calendar" size={24} color={colors.background} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: colors.foreground,
            }}
          >
            Schedule Appointment
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.mutedForeground,
              marginTop: 2,
            }}
          >
            Book your next visit
          </Text>
        </View>
      </View>

      <FormField
        label="Start Date"
        placeholder="Select start date"
        value={startDate}
        onChange={setStartDate}
        icon="calendar"
      />

      <FormField
        label="End Date"
        placeholder="Select end date (optional)"
        value={endDate}
        onChange={setEndDate}
        icon="calendar"
      />

      <FormField
        label="Reminder"
        placeholder="Remind me on..."
        value={reminderDate}
        onChange={setReminderDate}
        icon="bell"
      />

      <View
        style={{ flexDirection: "row", gap: spacing.md, marginTop: spacing.md }}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.foreground,
            }}
          >
            Cancel
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            backgroundColor: colors.primary,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.background,
            }}
          >
            Confirm
          </Text>
        </View>
      </View>
    </View>
  );
}

function EventForm() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [eventDate, setEventDate] = useState("");

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: colors.foreground,
          marginBottom: spacing.lg,
        }}
      >
        Create New Event
      </Text>

      <FormField
        label="Event Date"
        placeholder="Choose a date"
        value={eventDate}
        onChange={setEventDate}
        icon="grid"
      />

      {eventDate && (
        <View
          style={{
            backgroundColor: colors.muted,
            borderRadius: 12,
            padding: spacing.md,
            marginTop: spacing.md,
          }}
        >
          <Text style={{ fontSize: 14, color: colors.foreground }}>
            Event scheduled for{" "}
            <Text style={{ fontWeight: "700" }}>
              {new Date(eventDate + "T00:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
}

function InlineExamples() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");

  return (
    <View style={{ gap: spacing.md }}>
      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 12,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: colors.foreground,
              }}
            >
              Birthday
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.mutedForeground,
                marginTop: 2,
              }}
            >
              When were you born?
            </Text>
          </View>
          <DatePicker
            value={date1}
            onChange={setDate1}
            placeholder="Select date"
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 12,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: colors.foreground,
              }}
            >
              Wedding Anniversary
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.mutedForeground,
                marginTop: 2,
              }}
            >
              Celebrate your special day
            </Text>
          </View>
          <DatePicker
            value={date2}
            onChange={setDate2}
            placeholder="Select date"
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 12,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: colors.foreground,
              }}
            >
              Vacation Start
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.mutedForeground,
                marginTop: 2,
              }}
            >
              When does your trip begin?
            </Text>
          </View>
          <DatePicker
            value={date3}
            onChange={setDate3}
            placeholder="Select date"
          />
        </View>
      </View>
    </View>
  );
}

export default function DatePickerDemo() {
  return (
    <DemoScreen
      title="Date Picker"
      description="A modal date picker that opens a calendar for easy date selection."
    >
      <DemoSection label="Appointment Booking">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Complete form with multiple date fields for scheduling.
        </Text>
        <AppointmentForm />
      </DemoSection>

      <DemoSection label="Event Creation">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Select a date for your new event with visual feedback.
        </Text>
        <EventForm />
      </DemoSection>

      <DemoSection label="Inline Examples">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Date picker integrated into various form contexts.
        </Text>
        <InlineExamples />
      </DemoSection>
    </DemoScreen>
  );
}
