import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type PaymentMethod = {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>["name"];
};

const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    label: "Credit Card",
    description: "Visa, Mastercard, Amex",
    icon: "credit-card",
  },
  {
    id: "paypal",
    label: "PayPal",
    description: "Pay with your PayPal account",
    icon: "globe",
  },
  {
    id: "apple",
    label: "Apple Pay",
    description: "Fast checkout on iOS",
    icon: "smartphone",
  },
  {
    id: "bank",
    label: "Bank Transfer",
    description: "Direct from your bank (1-3 days)",
    icon: "home",
  },
];

type PlanOption = {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
};

const plans: PlanOption[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$9",
    period: "/month",
    features: ["5 projects", "10GB storage", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Analytics",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
    ],
  },
];

function RadioOption({
  label,
  description,
  icon,
}: {
  label: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>["name"];
}) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md,
        paddingVertical: spacing.sm,
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* RadioGroupItem will be rendered by parent */}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.md,
          flex: 1,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: colors.muted,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name={icon} size={20} color={colors.foreground} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.foreground,
            }}
          >
            {label}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: colors.mutedForeground,
              marginTop: 2,
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
}

function PaymentMethodSelector() {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];
  const [selected, setSelected] = useState("card");

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 12,
        padding: spacing.md,
      }}
    >
      <RadioGroup value={selected} onValueChange={setSelected}>
        {paymentMethods.map((method) => (
          <View key={method.id} nativeID={`label-${method.id}`}>
            <RadioGroupItem
              value={method.id}
              aria-labelledby={`label-${method.id}`}
            />
          </View>
        ))}
      </RadioGroup>
      {paymentMethods.map((method) => (
        <View
          key={method.id}
          style={[
            styles.paymentOption,
            selected === method.id && { backgroundColor: colors.muted },
            { borderRadius: 12, marginTop: spacing.sm, padding: spacing.md },
          ]}
          onTouchEnd={() => setSelected(method.id)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.md,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: colors.card,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor:
                  selected === method.id ? colors.primary : colors.border,
              }}
            >
              <Feather
                name={method.icon}
                size={22}
                color={
                  selected === method.id ? colors.primary : colors.foreground
                }
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.foreground,
                }}
              >
                {method.label}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.mutedForeground,
                  marginTop: 2,
                }}
              >
                {method.description}
              </Text>
            </View>
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                borderWidth: 2,
                borderColor:
                  selected === method.id ? colors.primary : colors.muted,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selected === method.id && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: colors.primary,
                  }}
                />
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

function PricingCard({
  plan,
  selected,
  onSelect,
}: {
  plan: PlanOption;
  selected: boolean;
  onSelect: () => void;
}) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={[
        styles.planCard,
        {
          backgroundColor: colors.card,
          borderRadius: 16,
          padding: spacing.lg,
          borderWidth: 2,
          borderColor: selected ? colors.primary : colors.border,
        },
      ]}
      onTouchEnd={onSelect}
    >
      {plan.recommended && (
        <View
          style={{
            position: "absolute",
            top: -10,
            alignSelf: "center",
            backgroundColor: colors.primary,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.xs,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontWeight: "700",
              color: colors.background,
            }}
          >
            MOST POPULAR
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: spacing.md,
        }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: "700", color: colors.foreground }}
        >
          {plan.name}
        </Text>
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderWidth: 2,
            borderColor: selected ? colors.primary : colors.muted,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selected && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: colors.primary,
              }}
            />
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          marginBottom: spacing.md,
        }}
      >
        <Text
          style={{ fontSize: 32, fontWeight: "800", color: colors.foreground }}
        >
          {plan.price}
        </Text>
        <Text style={{ fontSize: 14, color: colors.mutedForeground }}>
          {plan.period}
        </Text>
      </View>
      <View style={{ gap: spacing.sm }}>
        {plan.features.map((feature, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: spacing.sm,
            }}
          >
            <Feather name="check-circle" size={16} color={colors.primary} />
            <Text style={{ fontSize: 14, color: colors.mutedForeground }}>
              {feature}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function PricingSelector() {
  const [selected, setSelected] = useState("pro");

  return (
    <View style={{ gap: 12 }}>
      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          selected={selected === plan.id}
          onSelect={() => setSelected(plan.id)}
        />
      ))}
    </View>
  );
}

export default function RadioGroupDemo() {
  return (
    <DemoScreen
      title="Radio Group"
      description="Mutually exclusive selection from a set of options, with full accessibility support."
    >
      <DemoSection label="Payment Method">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Choose how you would like to pay for your subscription.
        </Text>
        <PaymentMethodSelector />
      </DemoSection>

      <DemoSection label="Subscription Plan">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Select the plan that best fits your needs.
        </Text>
        <PricingSelector />
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  paymentOption: {
    borderWidth: 1,
    borderColor: "transparent",
  },
  planCard: {
    position: "relative",
  },
});
