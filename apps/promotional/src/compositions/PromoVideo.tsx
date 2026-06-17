import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import Scene1Hook from "../scenes/Scene1Hook";
import Scene2Problem from "../scenes/Scene2Problem";
import Scene3Solution from "../scenes/Scene3Solution";
import Scene4CLI from "../scenes/Scene4CLI";
import Scene5Components from "../scenes/Scene5Components";
import Scene6Theme from "../scenes/Scene6Theme";
import Scene7CTA from "../scenes/Scene7CTA";

export const SCENE_FRAMES = {
  Scene1: { from: 0, duration: 300 },
  Scene2: { from: 300, duration: 420 },
  Scene3: { from: 720, duration: 360 },
  Scene4: { from: 1080, duration: 600 },
  Scene5: { from: 1680, duration: 600 },
  Scene6: { from: 2280, duration: 360 },
  Scene7: { from: 2640, duration: 480 },
};

export const TOTAL_DURATION = 3120;

const PromoVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence
        from={SCENE_FRAMES.Scene1.from}
        durationInFrames={SCENE_FRAMES.Scene1.duration}
      >
        <Scene1Hook />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene2.from}
        durationInFrames={SCENE_FRAMES.Scene2.duration}
      >
        <Scene2Problem />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene3.from}
        durationInFrames={SCENE_FRAMES.Scene3.duration}
      >
        <Scene3Solution />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene4.from}
        durationInFrames={SCENE_FRAMES.Scene4.duration}
      >
        <Scene4CLI />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene5.from}
        durationInFrames={SCENE_FRAMES.Scene5.duration}
        style={{
          scale: 1.002,
        }}
      >
        <Scene5Components />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene6.from}
        durationInFrames={SCENE_FRAMES.Scene6.duration}
      >
        <Scene6Theme />
      </Sequence>
      <Sequence
        from={SCENE_FRAMES.Scene7.from}
        durationInFrames={SCENE_FRAMES.Scene7.duration}
      >
        <Scene7CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

export default PromoVideo;
