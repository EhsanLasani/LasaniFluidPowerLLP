export const brandPalette = {
  primary: "#2A7DB1",
  secondary: "#1E4E6E",
  accent: "#B3D7EC",
  surfaceBase: "#F9FAFB",
  surfaceElevated: "#FFFFFF",
  textPrimary: "#1F2327",
  textSecondary: "#4A4A4A",
} as const;

export const logoVariants = {
  primary: "/Images/logo.png",
  inverse: "/Images/logo/logo-inverse.png",
  monochrome: "/Images/logo/logo-mono.png",
} as const;

export type LogoVariant = keyof typeof logoVariants;

export function getLogoSource(variant: LogoVariant = "primary") {
  return logoVariants[variant];
}
