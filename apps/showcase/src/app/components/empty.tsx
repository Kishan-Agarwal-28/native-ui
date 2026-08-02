import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { Feather, AntDesign } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import { View } from "react-native";

export default function EmptyDemo() {
  return (
    <DemoScreen
      title="Empty State"
      description="A composable empty-state layout with media, title, description, and action slots."
    >
      <DemoSection label="No Search Results">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Feather name="search" size={28} color="#71717a" />
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search terms or filters to find what
              you&apos;re looking for.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button title="Clear Filters" variant="outline" />
          </EmptyContent>
        </Empty>
      </DemoSection>

      <DemoSection label="No Notifications">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <AntDesign name="bell" size={28} color="#71717a" />
            </EmptyMedia>
            <EmptyTitle>You&apos;re all caught up</EmptyTitle>
            <EmptyDescription>
              No new notifications. Check back later for updates from your
              network.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </DemoSection>

      <DemoSection label="No Messages">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Feather name="inbox" size={28} color="#71717a" />
            </EmptyMedia>
            <EmptyTitle>No messages yet</EmptyTitle>
            <EmptyDescription>
              Start a conversation with someone to see messages here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button title="Browse Contacts" />
          </EmptyContent>
        </Empty>
      </DemoSection>

      <DemoSection label="No Documents">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Feather name="file-text" size={28} color="#71717a" />
            </EmptyMedia>
            <EmptyTitle>No documents</EmptyTitle>
            <EmptyDescription>
              Upload your first document to get started. We support PDF, DOC,
              and TXT files.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button title="Upload Document" />
          </EmptyContent>
        </Empty>
      </DemoSection>

      <DemoSection label="No Saved Items">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Feather name="bookmark" size={28} color="#71717a" />
            </EmptyMedia>
            <EmptyTitle>No saved items</EmptyTitle>
            <EmptyDescription>
              Bookmark articles, products, or posts to revisit them later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button title="Explore Content" variant="outline" />
          </EmptyContent>
        </Empty>
      </DemoSection>
    </DemoScreen>
  );
}
