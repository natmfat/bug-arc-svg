type ValueOf<T> = T[keyof T];

export type SpaceTokens = typeof spaceTokens;
export type SpaceStyles = ValueOf<SpaceTokens>;
export type Tokens = typeof tokens;

export const spaceTokens = {
  space1: "var(--space-1)",
  space2: "var(--space-2)",
  space4: "var(--space-4)",
  space6: "var(--space-6)",
  space8: "var(--space-8)",
  space12: "var(--space-12)",
  space16: "var(--space-16)",
  space20: "var(--space-20)",
  space24: "var(--space-24)",
  space28: "var(--space-28)",
  space32: "var(--space-32)",
  space40: "var(--space-40)",
  space48: "var(--space-48)",
  space56: "var(--space-56)",
  space64: "var(--space-64)",
  space80: "var(--space-80)",
  space96: "var(--space-96)",
  space128: "var(--space-128)",
  space256: "var(--space-256)",
  spaceDefault: "var(--space-default)",
} as const;

export const tokens = {
  ...spaceTokens,
} as const;

/**
 * Convert a css variable (a token) into the key needed to set a style \
 * It will simply return the style key if the argument was a style key
 * @param token CSS variable
 * @returns Style key
 *
 * @example
 * const style = {
 *   [tokenToStyle(tokens.space2)]: "override"
 * }
 *
 * @example
 * tokenToStyle("var(--space-2)") // => --space-2
 * tokenToStyle("--space-2") // => --space-2
 */
export function tokenToStyle(token: string) {
  return token.startsWith("var") ? token.substring(4, token.length - 1) : token;
}
