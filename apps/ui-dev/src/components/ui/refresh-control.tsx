import React from "react";
import {
  RefreshControlProps,
  RefreshControl as RNRefreshControl,
  ViewProps,
} from "react-native";
import { THEME, useTheme } from "@/lib/theme";

const RefreshControl = React.forwardRef<
  RNRefreshControl,
  ViewProps & RefreshControlProps
>(
  (
    {
      refreshing,
      onRefresh,
      colors,
      progressBackgroundColor,
      tintColor,
      titleColor,
      ...props
    },
    ref,
  ) => {
    const { theme } = useTheme();
    const { colors: themeColors } = THEME[theme];

    return (
      <RNRefreshControl
        ref={ref}
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor={tintColor || themeColors.foreground}
        colors={colors || [themeColors.foreground]}
        progressBackgroundColor={
          progressBackgroundColor || themeColors.background
        }
        titleColor={titleColor || themeColors.foreground}
        {...props}
      />
    );
  },
);

RefreshControl.displayName = "RefreshControl";

export default RefreshControl;
