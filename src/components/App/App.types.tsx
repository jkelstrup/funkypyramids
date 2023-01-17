export type BaseColor = {
  h: number;
  s: number;
  l: number;
  bColor: {
    hAdjust: number;
    sAdjust: number;
    lAdjust: number;
  };
  cColor: {
    hAdjust: number;
    sAdjust: number;
    lAdjust: number;
  };
};

export type OptionalOverride = {
  enabled: boolean;
  value: number;
};

export type OtherColor = {
  h: OptionalOverride;
  s: OptionalOverride;
  l: OptionalOverride;
  bColor: {
    hAdjust: OptionalOverride;
    sAdjust: OptionalOverride;
    lAdjust: OptionalOverride;
  };
  cColor: {
    hAdjust: OptionalOverride;
    sAdjust: OptionalOverride;
    lAdjust: OptionalOverride;
  };
};

export type ColorSeptuplet = {
  autoName: string;
  customName: string | undefined;
  base: BaseColor;
  lightest: OtherColor;
  darkest: OtherColor;
};
