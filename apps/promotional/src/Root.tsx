import React from "react";
import { Composition, Folder } from "remotion";
import PromoVideo, { TOTAL_DURATION } from "./compositions/PromoVideo";
import SquareVariant from "./compositions/SquareVariant";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Promotional">
        <Composition
          id="PromoVideo"
          component={PromoVideo}
          durationInFrames={TOTAL_DURATION}
          fps={60}
          width={1920}
          height={1080}
        />
        <Composition
          id="SquareVariant"
          component={SquareVariant}
          durationInFrames={TOTAL_DURATION}
          fps={60}
          width={1080}
          height={1080}
        />
      </Folder>
    </>
  );
};
