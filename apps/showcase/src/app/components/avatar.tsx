import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

const USERS = [
  { id: "1", name: "Sarah Chen", picture: "https://i.pravatar.cc/150?u=sarah" },
  {
    id: "2",
    name: "Marcus Johnson",
    picture: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    id: "3",
    name: "Aisha Patel",
    picture: "https://i.pravatar.cc/150?u=aisha",
  },
  {
    id: "4",
    name: "James Wilson",
    picture: "https://i.pravatar.cc/150?u=james",
  },
];

export default function AvatarDemo() {
  return (
    <DemoScreen
      title="Avatar"
      description="An image element with fallback for representing users, with automatic initials generation."
    >
      <DemoSection label="User Profile Cards">
        <View style={{ gap: 16 }}>
          {USERS.slice(0, 2).map((user) => (
            <View
              key={user.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                padding: 12,
                backgroundColor: "#f4f4f5",
                borderRadius: 12,
              }}
            >
              <Avatar name={user.name} picture={user.picture} size={48} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {user.name}
                </Text>
                <Text style={{ fontSize: 13, color: "#71717a" }}>
                  Software Engineer
                </Text>
              </View>
              <Feather name="chevron-right" size={18} color="#a1a1aa" />
            </View>
          ))}
        </View>
      </DemoSection>

      <DemoSection label="Avatar Group (Team Members)">
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {USERS.map((user, i) => (
              <View
                key={user.id}
                style={{
                  marginLeft: i > 0 ? -12 : 0,
                  zIndex: USERS.length - i,
                  borderWidth: 2,
                  borderColor: "#fff",
                  borderRadius: 9999,
                }}
              >
                <Avatar name={user.name} picture={user.picture} size={40} />
              </View>
            ))}
            <View
              style={{
                marginLeft: -12,
                width: 40,
                height: 40,
                borderRadius: 9999,
                backgroundColor: "#e4e4e7",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#fff",
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: "600", color: "#71717a" }}
              >
                +4
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: "#71717a" }}>
            8 team members in this project
          </Text>
        </View>
      </DemoSection>

      <DemoSection label="Initials Fallback">
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Avatar name="Priya Sharma" size={56} />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Priya Sharma</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Avatar name="Tom Erikson" size={56} />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Tom Erikson</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Avatar name="Lin Wei" size={56} />
            <Text style={{ fontSize: 13, color: "#71717a" }}>Lin Wei</Text>
          </View>
        </View>
      </DemoSection>

      <DemoSection label="With Custom Fallback">
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Avatar name="Anonymous User" size={56}>
            <AvatarFallback>
              <Feather name="user" size={24} color="#71717a" />
            </AvatarFallback>
          </Avatar>
          <Avatar name="Guest" size={56}>
            <AvatarFallback>
              <Feather name="user" size={24} color="#71717a" />
            </AvatarFallback>
          </Avatar>
        </View>
      </DemoSection>

      <DemoSection label="Size Variants">
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 12 }}>
          <View style={{ alignItems: "center", gap: 6 }}>
            <Avatar name="Alex Kim" size={24} />
            <Text style={{ fontSize: 11, color: "#71717a" }}>24px</Text>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <Avatar name="Alex Kim" size={32} />
            <Text style={{ fontSize: 11, color: "#71717a" }}>32px</Text>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <Avatar name="Alex Kim" size={48} />
            <Text style={{ fontSize: 11, color: "#71717a" }}>48px</Text>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <Avatar name="Alex Kim" size={64} />
            <Text style={{ fontSize: 11, color: "#71717a" }}>64px</Text>
          </View>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}
