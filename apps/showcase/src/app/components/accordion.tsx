import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I get started with the platform?",
    answer:
      "Getting started is easy! Simply sign up for a free account, complete your profile, and you can immediately start exploring all features. Our onboarding wizard will guide you through the key steps to set up your workspace.",
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and bank transfers for annual enterprise plans. All payments are securely processed with industry-standard encryption.",
  },
  {
    id: "faq-3",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you will not be charged again.",
  },
  {
    id: "faq-4",
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied with our service within the first 30 days, contact our support team for a full refund.",
  },
];

type PolicySection = {
  id: string;
  title: string;
  content: string;
  icon: React.ComponentProps<typeof Feather>["name"];
};

const policyData: PolicySection[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: "lock",
    content:
      "We collect only the information necessary to provide and improve our services. Your data is encrypted at rest and in transit. We never sell your personal information to third parties. You can request a copy of your data or request deletion at any time.",
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: "file-text",
    content:
      "By using our platform, you agree to use it lawfully and not attempt to breach any security measures. Content you create remains yours, but you grant us license to use it for providing services. We reserve the right to suspend accounts that violate these terms.",
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    icon: "package",
    content:
      "We use essential cookies for authentication and preferences, analytics cookies to understand how you use our platform, and marketing cookies (with your consent) to show relevant advertisements. You can manage your cookie preferences in settings.",
  },
];

type CourseModule = {
  id: string;
  title: string;
  duration: string;
  lessons: string[];
};

const courseData: CourseModule[] = [
  {
    id: "module-1",
    title: "Getting Started",
    duration: "45 min",
    lessons: [
      "Introduction to the platform",
      "Setting up your workspace",
      "Creating your first project",
    ],
  },
  {
    id: "module-2",
    title: "Core Concepts",
    duration: "1.5 hours",
    lessons: [
      "Understanding components",
      "Working with themes",
      "Managing state effectively",
    ],
  },
  {
    id: "module-3",
    title: "Advanced Techniques",
    duration: "2 hours",
    lessons: [
      "Custom animations",
      "Performance optimization",
      "Testing strategies",
    ],
  },
];

function FAQAccordion() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: spacing.md,
      }}
    >
      <Accordion type="multiple">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: colors.foreground,
                  flex: 1,
                }}
              >
                {item.question}
              </Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.mutedForeground,
                  lineHeight: 22,
                }}
              >
                {item.answer}
              </Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </View>
  );
}

function PolicyAccordion() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: spacing.md,
      }}
    >
      <Accordion type="single" collapsible>
        {policyData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: spacing.sm,
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: colors.muted,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather
                    name={item.icon}
                    size={18}
                    color={colors.foreground}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.foreground,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </AccordionTrigger>
            <AccordionContent>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.mutedForeground,
                  lineHeight: 22,
                }}
              >
                {item.content}
              </Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </View>
  );
}

function CourseAccordion() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: spacing.md,
      }}
    >
      <Accordion type="multiple">
        {courseData.map((module) => (
          <AccordionItem key={module.id} value={module.id}>
            <AccordionTrigger>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: colors.foreground,
                    }}
                  >
                    {module.title}
                  </Text>
                  <View
                    style={{
                      backgroundColor: colors.muted,
                      paddingHorizontal: spacing.sm,
                      paddingVertical: spacing.xs / 2,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "500",
                        color: colors.mutedForeground,
                      }}
                    >
                      {module.duration}
                    </Text>
                  </View>
                </View>
              </View>
            </AccordionTrigger>
            <AccordionContent>
              <View style={{ gap: spacing.sm, paddingLeft: spacing.md }}>
                {module.lessons.map((lesson, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: spacing.sm,
                    }}
                  >
                    <View
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text
                      style={{ fontSize: 14, color: colors.mutedForeground }}
                    >
                      {lesson}
                    </Text>
                  </View>
                ))}
              </View>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </View>
  );
}

export default function AccordionDemo() {
  return (
    <DemoScreen
      title="Accordion"
      description="Collapsible content sections with smooth animations for organizing information."
    >
      <DemoSection label="Frequently Asked Questions">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Common questions from our users.
        </Text>
        <FAQAccordion />
      </DemoSection>

      <DemoSection label="Legal Documents">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Important policies and terms.
        </Text>
        <PolicyAccordion />
      </DemoSection>

      <DemoSection label="Course Curriculum">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Expand modules to see lesson details.
        </Text>
        <CourseAccordion />
      </DemoSection>
    </DemoScreen>
  );
}
