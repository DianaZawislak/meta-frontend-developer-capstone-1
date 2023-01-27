import * as React from "react";
import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const enum Spacing {
  SM = 20,
  MD = 150,
  LG = 240,
}

const enum Orientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

type RadioOrientation = "horizontal" | "vertical" | undefined;

type RadioProps = {
  spacing: number;
  orientation: RadioOrientation;
};

const useResponsiveRadioProps = () => {
  const { breakpoints } = useMantineTheme();
  const { width } = useViewportSize();
  const [radio, setRadio] = React.useState<RadioProps>({
    spacing: Spacing.LG,
    orientation: Orientation.HORIZONTAL,
  });

  React.useEffect(() => {
    if (width >= breakpoints.md) {
      setRadio((prev) => ({
        ...prev,
        spacing: Spacing.LG,
        orientation: Orientation.HORIZONTAL,
      }));
    } else if (width < breakpoints.xs) {
      setRadio((prev) => ({
        ...prev,
        spacing: Spacing.SM,
        orientation: Orientation.VERTICAL,
      }));
    } else {
      setRadio((prev) => ({
        ...prev,
        spacing: Spacing.MD,
        orientation: Orientation.HORIZONTAL,
      }));
    }
  }, [width]);

  return radio;
};

export default useResponsiveRadioProps;
