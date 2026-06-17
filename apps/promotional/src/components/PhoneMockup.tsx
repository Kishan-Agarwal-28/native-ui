import React from "react";
import { colors } from "../utils/colors";

interface PhoneMockupProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  screenColor?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  style,
  screenColor = colors.bg,
}) => {
  return (
    <div
      style={{
        borderRadius: 44,
        border: "8px solid #2a2a2a",
        backgroundColor: "#1a1a1a",
        padding: 0,
        overflow: "hidden",
        width: 280,
        height: 580,
        position: "relative",
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: screenColor,
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatusBar />
        <DynamicIsland />
        <div
          style={{
            flex: 1,
            padding: "20px 16px",
            paddingTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const statusBarStyle: React.CSSProperties = {
  height: 44,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 24px",
  paddingTop: 4,
  zIndex: 10,
};

const timeStyle: React.CSSProperties = {
  color: colors.text,
  fontSize: 14,
  fontWeight: "600",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const StatusBar: React.FC = () => {
  return (
    <div style={statusBarStyle}>
      <span style={timeStyle}>9:41</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <SignalBars />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
};

const DynamicIsland: React.FC = () => {
  return (
    <div
      style={{
        width: 120,
        height: 34,
        borderRadius: 20,
        backgroundColor: "#000",
        position: "absolute",
        top: 12,
        left: "50%",
        marginLeft: -60,
        zIndex: 20,
      }}
    />
  );
};

const SignalBars: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 1.5,
      }}
    >
      {[3, 5, 7, 9].map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            backgroundColor: colors.text,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
};

const WifiIcon: React.FC = () => {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path
        d="M7 9.5a1 1 0 110-2 1 1 0 010 2zM4.5 7a3.5 3.5 0 015 0M2.5 4.5a6.5 6.5 0 019 0M0.5 2a9.5 9.5 0 0113 0"
        stroke={colors.text}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BatteryIcon: React.FC = () => {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="10"
        rx="2"
        stroke={colors.text}
        strokeWidth="1"
      />
      <rect x="2.5" y="2" width="14" height="7" rx="1" fill={colors.green} />
      <rect x="19.5" y="3.5" width="2" height="4" rx="0.5" fill={colors.text} />
    </svg>
  );
};
