import { Textarea } from "@/components/ui/textarea";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import { View } from "react-native";
import { THEME, useTheme } from "@/lib/theme";

export default function TextareaDemo() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  const [bio, setBio] = useState("");
  const [feedback, setFeedback] = useState("");
  const [comment, setComment] = useState("");

  return (
    <DemoScreen
      title="Textarea"
      description="Multiline text input with focus ring, error state, and disabled styling."
    >
      {/* User Bio */}
      <DemoSection label="Profile Setup">
        <Textarea
          placeholder="Tell your team a bit about yourself — what you do, your interests, your goals…"
          value={bio}
          onChangeText={setBio}
          style={{ minHeight: 88 }}
        />
      </DemoSection>

      {/* Feedback */}
      <DemoSection label="Support Request">
        <Textarea
          placeholder="Describe your issue in detail — include any error messages or steps to reproduce…"
          value={feedback}
          onChangeText={setFeedback}
          style={{ minHeight: 112 }}
        />
      </DemoSection>

      {/* Review Comment */}
      <DemoSection label="Leave a Review">
        <Textarea
          placeholder="Share your experience with this product…"
          value={comment}
          onChangeText={setComment}
          style={{ minHeight: 72 }}
        />
      </DemoSection>
    </DemoScreen>
  );
}
