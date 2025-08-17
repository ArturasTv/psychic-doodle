export type Breakpoint = "base" | "tablet" | "desktop";
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export const BREAKPOINTS: Record<Breakpoint, string> = {
  base: "",
  tablet: "tablet:",
  desktop: "desktop:",
};

export function toResponsiveClasses<T>(
  responsiveValue: Responsive<T> | undefined,
  renderClassFor: (value: T, breakpoint: Breakpoint) => string | undefined
): string[] {
  if (responsiveValue === undefined) return [];

  if (
    typeof responsiveValue !== "object" ||
    responsiveValue === null ||
    Array.isArray(responsiveValue)
  ) {
    const className = renderClassFor(responsiveValue as T, "base");
    return className ? [className] : [];
  }

  const classes: string[] = [];
  const breakpointKeys = Object.keys(responsiveValue) as Breakpoint[];

  for (const breakpoint of breakpointKeys) {
    const valueAtBreakpoint = (responsiveValue as Partial<Record<Breakpoint, T>>)[breakpoint];
    if (valueAtBreakpoint === undefined) continue;

    const className = renderClassFor(valueAtBreakpoint, breakpoint);
    if (className) classes.push(className);
  }

  return classes;
}


export function bp(breakpoint: Breakpoint, className: string) {
  const prefix = BREAKPOINTS[breakpoint];
  return prefix ? `${prefix}${className}` : className;
}

export function colRowCountToClass(axis: "cols" | "rows", count: number) {
  return `grid-${axis}-${count}`;
}


export function spanToClass(axis: "col" | "row", span: number | "full") {
  return span === "full" ? `${axis}-span-full` : `${axis}-span-${span}`;
}

export function startEndToClass(
  axis: "col" | "row",
  position: "start" | "end",
  lineNumber: number
) {
  return `${axis}-${position}-${lineNumber}`;
}
