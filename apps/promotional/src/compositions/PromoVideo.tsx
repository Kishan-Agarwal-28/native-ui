import React from "react";
import { Sequence, AbsoluteFill } from "remotion";
import Scene1Hook from "../scenes/Scene1Hook";
import Scene2Positioning from "../scenes/Scene2Positioning";
import Scene3TwoTruths from "../scenes/Scene3TwoTruths";
import Scene4CLI from "../scenes/Scene4CLI";
import Scene5Components from "../scenes/Scene5Components";
import Scene6StyleSheet from "../scenes/Scene6StyleSheet";
import Scene7SocialProof from "../scenes/Scene7SocialProof";
import Scene8CTA from "../scenes/Scene8CTA";

export const TOTAL_FRAMES = 3300;

const SCENES = [
  { Component: Scene1Hook, durationInFrames: 360 },
  { Component: Scene2Positioning, durationInFrames: 360 },
  { Component: Scene3TwoTruths, durationInFrames: 360 },
  { Component: Scene4CLI, durationInFrames: 600 },
  { Component: Scene5Components, durationInFrames: 360 },
  { Component: Scene6StyleSheet, durationInFrames: 360 },
  { Component: Scene7SocialProof, durationInFrames: 360 },
  { Component: Scene8CTA, durationInFrames: 540 },
];

export const PromoVideo: React.FC = () => {
  let from = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090b" }}>
      {SCENES.map(({ Component, durationInFrames }, i) => {
        const start = from;
        from += durationInFrames;
        return (
          <Sequence key={i} from={start} durationInFrames={durationInFrames}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
