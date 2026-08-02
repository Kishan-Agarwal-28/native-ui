import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useTheme, THEME } from "@/lib/theme";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Product Designer at Figma",
    avatar: "https://picsum.photos/seed/sarah/200/200",
    quote:
      "This component library has completely transformed how our team builds mobile UIs. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Senior Engineer at Stripe",
    avatar: "https://picsum.photos/seed/marcus/200/200",
    quote:
      "The best React Native component library I have ever used. Clean API, beautiful design, and incredibly well-documented.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Mobile Lead at Shopify",
    avatar: "https://picsum.photos/seed/emily/200/200",
    quote:
      "We shipped our redesigned app in half the time thanks to these pre-built components. Highly recommended!",
    rating: 5,
  },
];

type Feature = {
  id: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    id: "1",
    icon: "zap",
    title: "Lightning Fast",
    description:
      "Optimized for performance with minimal re-renders and smooth animations.",
    image: "https://picsum.photos/seed/fast/600/400",
  },
  {
    id: "2",
    icon: "shield",
    title: "Accessible",
    description:
      "Built with accessibility in mind from the ground up. Full screen reader support.",
    image: "https://picsum.photos/seed/secure/600/400",
  },
  {
    id: "3",
    icon: "droplet",
    title: "Themeable",
    description:
      "Customize every aspect with our powerful theming system. Light and dark mode out of the box.",
    image: "https://picsum.photos/seed/theme/600/400",
  },
];

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Bag",
    category: "Accessories",
    price: "$299",
    rating: 4.8,
    reviews: 124,
    image: "https://picsum.photos/seed/bag/600/600",
  },
  {
    id: "2",
    name: "Minimal Watch",
    category: "Watches",
    price: "$449",
    rating: 4.9,
    reviews: 89,
    image: "https://picsum.photos/seed/watch2/600/600",
  },
  {
    id: "3",
    name: "Canvas Backpack",
    category: "Bags",
    price: "$179",
    rating: 4.7,
    reviews: 203,
    image: "https://picsum.photos/seed/backpack/600/600",
  },
  {
    id: "4",
    name: "Sunglasses Classic",
    category: "Eyewear",
    price: "$199",
    rating: 4.6,
    reviews: 156,
    image: "https://picsum.photos/seed/sunglasses/600/600",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={[
        styles.testimonialCard,
        { backgroundColor: colors.card, padding: spacing.xl },
      ]}
    >
      <View style={{ flexDirection: "row", marginBottom: spacing.md }}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Feather
            key={i}
            name="star"
            size={16}
            color="#f59e0b"
            style={{ marginRight: 2 }}
          />
        ))}
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          color: colors.foreground,
          lineHeight: 28,
          marginBottom: spacing.lg,
        }}
      >
        "{testimonial.quote}"
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: spacing.md }}
      >
        <Image
          source={{ uri: testimonial.avatar }}
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: colors.foreground,
            }}
          >
            {testimonial.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: colors.mutedForeground,
              marginTop: 2,
            }}
          >
            {testimonial.role}
          </Text>
        </View>
      </View>
    </View>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={[
        styles.featureCard,
        { backgroundColor: colors.card, borderRadius: 24, overflow: "hidden" },
      ]}
    >
      <Image
        source={{ uri: feature.image }}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      />
      <View style={{ padding: spacing.lg }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: spacing.md,
          }}
        >
          <Feather name={feature.icon} size={24} color={colors.background} />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: colors.foreground,
            marginBottom: spacing.sm,
          }}
        >
          {feature.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.mutedForeground,
            lineHeight: 22,
          }}
        >
          {feature.description}
        </Text>
      </View>
    </View>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { theme } = useTheme();
  const { colors, spacing } = THEME[theme];

  return (
    <View
      style={[
        styles.productCard,
        { backgroundColor: colors.card, borderRadius: 16, overflow: "hidden" },
      ]}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 220 }}
        resizeMode="cover"
      />
      <View style={{ padding: spacing.md }}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "600",
            color: colors.primary,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {product.category}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color: colors.foreground,
            marginTop: 4,
          }}
        >
          {product.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: spacing.sm,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: colors.foreground,
            }}
          >
            {product.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Feather name="star" size={14} color="#f59e0b" />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: colors.foreground,
              }}
            >
              {product.rating}
            </Text>
            <Text style={{ fontSize: 13, color: colors.mutedForeground }}>
              ({product.reviews})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function TestimonialCarousel() {
  return (
    <View style={{ paddingVertical: 24 }}>
      <Carousel loop>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <View style={styles.itemPadding}>
                <TestimonialCard testimonial={testimonial} />
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious style={{ left: 16 }} />
        <CarouselNext style={{ right: 16 }} />
        <CarouselDots style={{ marginTop: 20 }} />
      </Carousel>
    </View>
  );
}

function FeatureCarousel() {
  return (
    <View style={{ paddingVertical: 24 }}>
      <Carousel loop>
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.id}>
              <View style={styles.itemPadding}>
                <FeatureCard feature={feature} />
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious style={{ left: 16 }} />
        <CarouselNext style={{ right: 16 }} />
        <CarouselDots style={{ marginTop: 20 }} />
      </Carousel>
    </View>
  );
}

function ProductCarousel() {
  return (
    <View style={{ paddingVertical: 24 }}>
      <Carousel loop>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <View style={styles.itemPadding}>
                <ProductCard product={product} />
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious style={{ left: 16 }} />
        <CarouselNext style={{ right: 16 }} />
        <CarouselDots style={{ marginTop: 20 }} />
      </Carousel>
    </View>
  );
}

export default function CarouselDemo() {
  return (
    <DemoScreen
      title="Carousel"
      description="Swipeable slideshow component with looping, navigation buttons, and dot indicators."
    >
      <DemoSection label="Customer Testimonials">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          What our customers are saying about us.
        </Text>
        <TestimonialCarousel />
      </DemoSection>

      <DemoSection label="Feature Highlights">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Discover the key features that make our platform special.
        </Text>
        <FeatureCarousel />
      </DemoSection>

      <DemoSection label="Product Showcase">
        <Text
          style={{
            marginBottom: 12,
            fontSize: 14,
            color: THEME.light.colors.mutedForeground,
          }}
        >
          Browse our latest collection of products.
        </Text>
        <ProductCarousel />
      </DemoSection>
    </DemoScreen>
  );
}

const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemPadding: {
    paddingHorizontal: Platform.OS === "web" ? 0 : 16,
  },
  testimonialCard: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    ...Platform.select({
      web: {
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      },
    }),
  },
  featureCard: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    ...Platform.select({
      web: {
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      },
    }),
  },
  productCard: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    ...Platform.select({
      web: {
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      },
    }),
  },
});
