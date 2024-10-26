import { tokens, Tokens } from "../tokens";
import { ComponentPropsWithoutRef, createContext, useContext } from "react";

export type IconSize =
  | Tokens["space6"]
  | Tokens["space12"]
  | Tokens["space16"]
  | Tokens["space20"]
  | Tokens["space24"]
  | Tokens["space32"]
  | Tokens["space48"]
  | Tokens["space96"];

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  /**
   * Usually determined automatically
   * Overrides the icon size provider
   */
  size?: IconSize;

  /**
   * use like `img alt` attribute.
   * leave empty `alt=""` if this is purely decorative.
   * if the icon implies some state that's not exposed as visible text or label,
   * provide it such as `<WarningIcon alt="warning" />`
   */
  alt?: string;
}

const IconSizeContext = createContext<IconSize>(tokens.space16);

export const IconSizeProvider = IconSizeContext.Provider;

export function Icon({
  size: sizeOverride,
  // @todo color should be raw too?
  color,
  style,
  alt,
  children,
  ...props
}: IconProps) {
  const globalIconSize = useContext(IconSizeContext);
  const iconSize = sizeOverride || globalIconSize || tokens.space16;

  return (
    <svg
      preserveAspectRatio="xMidYMin"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      style={{
        ...style,
        verticalAlign: "middle",
        minWidth: iconSize,
        minHeight: iconSize,
      }}
      aria-hidden={!alt}
      focusable={false}
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "currentColor"}
      {...props}
    >
      {/* https://css-tricks.com/accessible-svg-icons/ */}
      {alt ? <title>{alt}</title> : null}
      {children}
    </svg>
  );
}
