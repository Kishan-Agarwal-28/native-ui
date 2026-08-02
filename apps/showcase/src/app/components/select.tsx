import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { DemoScreen, DemoSection } from "@/components/demo-screen";
import { useState } from "react";
import type { Option } from "@/components/ui/select";
import { THEME, useTheme } from "@/lib/theme";

export default function SelectDemo() {
  const { theme } = useTheme();
  const { spacing } = THEME[theme];

  const [sortBy, setSortBy] = useState<Option | undefined>();
  const [country, setCountry] = useState<Option | undefined>();
  const [status, setStatus] = useState<Option | undefined>();

  return (
    <DemoScreen
      title="Select"
      description="Animated dropdown picker with grouped options, separators, and full keyboard support."
    >
      {/* Sort Order */}
      <DemoSection label="Sort By">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Most recent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent" label="Most recent" />
            <SelectItem value="oldest" label="Oldest first" />
            <SelectItem value="a-z" label="A — Z" />
            <SelectItem value="z-a" label="Z — A" />
          </SelectContent>
        </Select>
      </DemoSection>

      {/* Country Picker */}
      <DemoSection label="Country">
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select country…" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="us" label="United States" />
              <SelectItem value="ca" label="Canada" />
              <SelectItem value="mx" label="Mexico" />
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gb" label="United Kingdom" />
              <SelectItem value="de" label="Germany" />
              <SelectItem value="fr" label="France" />
              <SelectItem value="es" label="Spain" />
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia Pacific</SelectLabel>
              <SelectItem value="jp" label="Japan" />
              <SelectItem value="au" label="Australia" />
              <SelectItem value="sg" label="Singapore" />
            </SelectGroup>
          </SelectContent>
        </Select>
      </DemoSection>

      {/* Status Filter */}
      <DemoSection label="Filter by Status">
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger size="sm">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" label="All" />
            <SelectItem value="active" label="Active" />
            <SelectItem value="pending" label="Pending" />
            <SelectItem value="archived" label="Archived" />
          </SelectContent>
        </Select>
      </DemoSection>
    </DemoScreen>
  );
}
