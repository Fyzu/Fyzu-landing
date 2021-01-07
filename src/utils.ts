export const rem = (px: number, baseSize = 18) => `${(px / baseSize).toFixed(3)}rem`

export const retina = (ratio: number) =>
  `@media only screen and (min-resolution: ${ratio}dppx), only screen and (min-width: ${
    1440 * ratio
  }px)`
