import React from "react";
import { Composition } from "remotion";
import { PromoVideo, TOTAL_FRAMES } from "./compositions/PromoVideo";
import { SquareVariant } from "./compositions/SquareVariant";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PromoVideo"
        component={PromoVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
      <Composition
        id="SquareVariant"
        component={SquareVariant}
        durationInFrames={TOTAL_FRAMES}
        fps={60}
        width={1080}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
