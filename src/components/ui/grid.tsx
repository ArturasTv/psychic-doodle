import type { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import type { Responsive, Breakpoint } from "../../lib/utils";
import {
	toResponsiveClasses,
	bp,
	colRowCountToClass,
	spanToClass,
	startEndToClass,
} from "../../lib/utils";

/** ===== Shared Types (deduped) ===== */
type OneToTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Align = "start" | "end" | "center" | "stretch";
type AutoTrack = "auto" | "min" | "max" | "fr";
type GridFlow = "row" | "col" | "dense" | "row-dense" | "col-dense";
type Span = OneToTwelve | "full";

/** ===== Helpers ===== */
function pushResponsive<T>(
	acc: string[],
	value: Responsive<T> | undefined,
	make: (v: T, b: Breakpoint) => string,
) {
	if (value == null) return;
	acc.push(...toResponsiveClasses(value, (v, b) => bp(b, make(v, b))));
}

/** ===== CVAs (only for non-numeric variants) ===== */
const gridContainerCva = cva("grid", {
	variants: {
		flow: {
			row: "grid-flow-row",
			col: "grid-flow-col",
			dense: "grid-flow-dense",
			"row-dense": "grid-flow-row-dense",
			"col-dense": "grid-flow-col-dense",
		} as const,
		autoRows: {
			auto: "auto-rows-auto",
			min: "auto-rows-min",
			max: "auto-rows-max",
			fr: "auto-rows-fr",
		} as const,
		autoCols: {
			auto: "auto-cols-auto",
			min: "auto-cols-min",
			max: "auto-cols-max",
			fr: "auto-cols-fr",
		} as const,
		placeItems: {
			start: "place-items-start",
			end: "place-items-end",
			center: "place-items-center",
			stretch: "place-items-stretch",
		} as const,
		placeContent: {
			start: "place-content-start",
			end: "place-content-end",
			center: "place-content-center",
			stretch: "place-content-stretch",
		} as const,
		justifyItems: {
			start: "justify-items-start",
			end: "justify-items-end",
			center: "justify-items-center",
			stretch: "justify-items-stretch",
		} as const,
		alignItems: {
			start: "items-start",
			end: "items-end",
			center: "items-center",
			stretch: "items-stretch",
		} as const,
		justifyContent: {
			start: "justify-start",
			end: "justify-end",
			center: "justify-center",
			stretch: "justify-stretch",
		} as const,
		alignContent: {
			start: "content-start",
			end: "content-end",
			center: "content-center",
			stretch: "content-stretch",
		} as const,
	},
});

const gridItemCva = cva("", {
	variants: {
		placeSelf: {
			start: "place-self-start",
			end: "place-self-end",
			center: "place-self-center",
			stretch: "place-self-stretch",
		} as const,
		justifySelf: {
			start: "justify-self-start",
			end: "justify-self-end",
			center: "justify-self-center",
			stretch: "justify-self-stretch",
		} as const,
		alignSelf: {
			start: "self-start",
			end: "self-end",
			center: "self-center",
			stretch: "self-stretch",
		} as const,
	},
});

/** ===== Grid ===== */
export type GridProps = {
	as?: ElementType;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;

	cols?: Responsive<OneToTwelve>;
	rows?: Responsive<OneToTwelve>;

	templateCols?: string;
	templateRows?: string;
	areas?: string;

	flow?: Responsive<GridFlow>;

	/** gaps accept number or string to match Tailwind (e.g. 1.5, "1.5", 7) */
	gap?: Responsive<number | `${number}`>;
	gapX?: Responsive<number | `${number}`>;
	gapY?: Responsive<number | `${number}`>;

	autoRows?: Responsive<AutoTrack>;
	autoCols?: Responsive<AutoTrack>;

	placeItems?: Responsive<Align>;
	placeContent?: Responsive<Align>;
	justifyItems?: Responsive<Align>;
	alignItems?: Responsive<Align>;
	justifyContent?: Responsive<Align>;
	alignContent?: Responsive<Align>;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "style">;

export function Grid({
	as: As = "div",
	children,
	className,
	style,
	cols,
	rows,
	templateCols,
	templateRows,
	areas,
	flow,
	gap,
	gapX,
	gapY,
	autoRows,
	autoCols,
	placeItems,
	placeContent,
	justifyItems,
	alignItems,
	justifyContent,
	alignContent,
	...rest
}: GridProps) {
	const classes: string[] = [];

	// CVA-driven bits
	pushResponsive(classes, flow, (v) => gridContainerCva({ flow: v }));
	pushResponsive(classes, autoRows, (v) => gridContainerCva({ autoRows: v }));
	pushResponsive(classes, autoCols, (v) => gridContainerCva({ autoCols: v }));
	pushResponsive(classes, placeItems, (v) =>
		gridContainerCva({ placeItems: v }),
	);
	pushResponsive(classes, placeContent, (v) =>
		gridContainerCva({ placeContent: v }),
	);
	pushResponsive(classes, justifyItems, (v) =>
		gridContainerCva({ justifyItems: v }),
	);
	pushResponsive(classes, alignItems, (v) =>
		gridContainerCva({ alignItems: v }),
	);
	pushResponsive(classes, justifyContent, (v) =>
		gridContainerCva({ justifyContent: v }),
	);
	pushResponsive(classes, alignContent, (v) =>
		gridContainerCva({ alignContent: v }),
	);

	// numeric / free string utilities (no need to list them in CVA)
	pushResponsive(classes, gap, (v) => `gap-${String(v)}`);
	pushResponsive(classes, gapX, (v) => `gap-x-${String(v)}`);
	pushResponsive(classes, gapY, (v) => `gap-y-${String(v)}`);

	pushResponsive(classes, cols, (val) => colRowCountToClass("cols", val));
	pushResponsive(classes, rows, (val) => colRowCountToClass("rows", val));

	const merged = twMerge(clsx(gridContainerCva(), classes, className));

	const inline: React.CSSProperties = {
		...style,
		...(templateCols ? { gridTemplateColumns: templateCols } : {}),
		...(templateRows ? { gridTemplateRows: templateRows } : {}),
		...(areas ? { gridTemplateAreas: areas } : {}),
	};

	return (
		<As className={merged} style={inline} {...rest}>
			{children}
		</As>
	);
}

/** ===== Grid.Item ===== */
export type GridItemProps = {
	as?: ElementType;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;

	colSpan?: Responsive<Span>;
	rowSpan?: Responsive<Span>;

	colStart?: Responsive<OneToTwelve>;
	colEnd?: Responsive<OneToTwelve>;
	rowStart?: Responsive<OneToTwelve>;
	rowEnd?: Responsive<OneToTwelve>;

	area?: string;
	order?: Responsive<number>;

	placeSelf?: Responsive<Align>;
	justifySelf?: Responsive<Align>;
	alignSelf?: Responsive<Align>;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "style">;

export function GridItem({
	as: As = "div",
	children,
	className,
	style,
	colSpan,
	rowSpan,
	colStart,
	colEnd,
	rowStart,
	rowEnd,
	area,
	order,
	placeSelf,
	justifySelf,
	alignSelf,
	...rest
}: GridItemProps) {
	const classes: string[] = [];

	pushResponsive(classes, colSpan, (v) => spanToClass("col", v));
	pushResponsive(classes, rowSpan, (v) => spanToClass("row", v));

	pushResponsive(classes, colStart, (v) => startEndToClass("col", "start", v));
	pushResponsive(classes, colEnd, (v) => startEndToClass("col", "end", v));
	pushResponsive(classes, rowStart, (v) => startEndToClass("row", "start", v));
	pushResponsive(classes, rowEnd, (v) => startEndToClass("row", "end", v));

	pushResponsive(classes, order, (v) => `order-${v}`);

	pushResponsive(classes, placeSelf, (v) => gridItemCva({ placeSelf: v }));
	pushResponsive(classes, justifySelf, (v) => gridItemCva({ justifySelf: v }));
	pushResponsive(classes, alignSelf, (v) => gridItemCva({ alignSelf: v }));

	const merged = twMerge(clsx(gridItemCva(), classes, className));

	const inline: React.CSSProperties = {
		...style,
		...(area ? { gridArea: area } : {}),
	};

	return (
		<As className={merged} style={inline} {...rest}>
			{children}
		</As>
	);
}

Grid.Item = GridItem;
