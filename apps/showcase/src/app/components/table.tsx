import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { THEME, useTheme } from "@/lib/theme";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TableDemo() {
  const { theme } = useTheme();
  const { colors, spacing, typography } = THEME[theme];

  return (
    <DemoScreen
      title="Table"
      description="Structured data display for lists, records, and comparative information."
    >
      <DemoSection label="Recent Orders">
        <OrderHistoryTable
          colors={colors}
          spacing={spacing}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Team Members">
        <TeamMembersTable
          colors={colors}
          spacing={spacing}
          typography={typography}
        />
      </DemoSection>

      <DemoSection label="Storage Usage">
        <StorageTable
          colors={colors}
          spacing={spacing}
          typography={typography}
        />
      </DemoSection>
    </DemoScreen>
  );
}

function OrderHistoryTable({ colors, spacing, typography }: any) {
  const orders = [
    {
      id: "ORD-7841",
      date: "Jan 15, 2025",
      status: "Delivered",
      total: "$129.00",
    },
    {
      id: "ORD-7823",
      date: "Jan 12, 2025",
      status: "Shipped",
      total: "$45.99",
    },
    {
      id: "ORD-7798",
      date: "Jan 8, 2025",
      status: "Processing",
      total: "$219.50",
    },
    {
      id: "ORD-7751",
      date: "Jan 3, 2025",
      status: "Delivered",
      total: "$32.00",
    },
  ];

  const statusVariant = (status: string) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "info";
      case "Processing":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableCaption>Last 4 orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead style={{ flex: 1 }}>Order ID</TableHead>
            <TableHead style={{ flex: 1.5 }}>Date</TableHead>
            <TableHead style={{ flex: 1 }}>Status</TableHead>
            <TableHead style={{ flex: 1 }}>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: typography.sm,
                    fontWeight: "500",
                  }}
                >
                  {order.id}
                </Text>
              </TableCell>
              <TableCell style={{ flex: 1.5 }}>
                <Text
                  style={{ color: colors.foreground, fontSize: typography.sm }}
                >
                  {order.date}
                </Text>
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <Badge
                  label={order.status}
                  variant={statusVariant(order.status) as any}
                />
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.foreground,
                    fontSize: typography.sm,
                    fontWeight: "500",
                  }}
                >
                  {order.total}
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell style={{ flex: 3.5 }}>
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                  fontWeight: "500",
                }}
              >
                Total (Last 30 days)
              </Text>
            </TableCell>
            <TableCell style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.foreground,
                  fontSize: typography.sm,
                  fontWeight: "600",
                }}
              >
                $426.49
              </Text>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </View>
  );
}

function TeamMembersTable({ colors, spacing, typography }: any) {
  const members = [
    {
      name: "Sarah Chen",
      role: "Admin",
      email: "sarah@acme.co",
      status: "Active",
    },
    {
      name: "Marcus Webb",
      role: "Editor",
      email: "marcus@acme.co",
      status: "Active",
    },
    {
      name: "Priya Patel",
      role: "Viewer",
      email: "priya@acme.co",
      status: "Inactive",
    },
    {
      name: "Tom Eriksson",
      role: "Editor",
      email: "tom@acme.co",
      status: "Active",
    },
  ];

  const roleVariant = (role: string) => {
    switch (role) {
      case "Admin":
        return "destructive";
      case "Editor":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableCaption>4 team members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead style={{ flex: 1.5 }}>Name</TableHead>
            <TableHead style={{ flex: 1 }}>Role</TableHead>
            <TableHead style={{ flex: 1.5 }}>Email</TableHead>
            <TableHead style={{ flex: 1 }}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell style={{ flex: 1.5 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: spacing.sm,
                  }}
                >
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      backgroundColor: colors.muted,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.foreground,
                        fontSize: typography.xs,
                        fontWeight: "600",
                      }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: colors.foreground,
                      fontSize: typography.sm,
                      fontWeight: "500",
                    }}
                  >
                    {member.name}
                  </Text>
                </View>
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <Badge
                  label={member.role}
                  variant={roleVariant(member.role) as any}
                />
              </TableCell>
              <TableCell style={{ flex: 1.5 }}>
                <Text
                  style={{
                    color: colors.mutedForeground,
                    fontSize: typography.sm,
                  }}
                >
                  {member.email}
                </Text>
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor:
                        member.status === "Active"
                          ? "#16a34a"
                          : colors.mutedForeground,
                    }}
                  />
                  <Text
                    style={{
                      color: colors.mutedForeground,
                      fontSize: typography.sm,
                    }}
                  >
                    {member.status}
                  </Text>
                </View>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </View>
  );
}

function StorageTable({ colors, spacing, typography }: any) {
  const folders = [
    { name: "Photos", size: "4.2 GB", files: 1247, color: "#8b5cf6" },
    { name: "Documents", size: "892 MB", files: 342, color: "#2563eb" },
    { name: "Downloads", size: "1.1 GB", files: 89, color: "#d97706" },
    { name: "Projects", size: "3.4 GB", files: 567, color: "#16a34a" },
  ];

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableCaption>Storage breakdown</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead style={{ flex: 1.5 }}>Folder</TableHead>
            <TableHead style={{ flex: 1 }}>Size</TableHead>
            <TableHead style={{ flex: 1 }}>Files</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {folders.map((folder) => (
            <TableRow key={folder.name}>
              <TableCell style={{ flex: 1.5 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: spacing.sm,
                  }}
                >
                  <Feather name="folder" size={16} color={folder.color} />
                  <Text
                    style={{
                      color: colors.foreground,
                      fontSize: typography.sm,
                      fontWeight: "500",
                    }}
                  >
                    {folder.name}
                  </Text>
                </View>
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <Text
                  style={{ color: colors.foreground, fontSize: typography.sm }}
                >
                  {folder.size}
                </Text>
              </TableCell>
              <TableCell style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.mutedForeground,
                    fontSize: typography.sm,
                  }}
                >
                  {folder.files.toLocaleString()}
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                  fontWeight: "500",
                }}
              >
                Total Used
              </Text>
            </TableCell>
            <TableCell>
              <Text
                style={{
                  color: colors.foreground,
                  fontSize: typography.sm,
                  fontWeight: "600",
                }}
              >
                9.6 GB
              </Text>
            </TableCell>
            <TableCell>
              <Text
                style={{
                  color: colors.mutedForeground,
                  fontSize: typography.sm,
                }}
              >
                2,245
              </Text>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </View>
  );
}
