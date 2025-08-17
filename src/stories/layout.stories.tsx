import { Grid } from "../components/ui/grid";
import Block from "../components/ui/block";

const Header = () => <Block variant="gray">Header (fixed)</Block>;
const Footer = () => <Block variant="gray">Footer (fixed)</Block>;

const Main = ({ children }: { children: React.ReactNode }) => (
	<main className="flex flex-col h-[calc(100vh-64px)]">
		<Header />
		<div className="flex-grow">{children}</div>
		<Footer />
	</main>
);

export default {
	title: "Layout/Grid",
	component: Grid,
};

export const CenteredItemGrid = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item
				colSpan={{ base: 1, desktop: 12 }}
				alignSelf={{ desktop: "center" }}
				justifySelf={{ desktop: "center" }}
			>
				<Block variant="blue">Centered Item</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const TwoColumn_25_75 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 3 }} className="h-full">
				<Block variant="blue">25%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 9 }} className="h-full">
				<Block variant="green">75%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const TwoColumn_33_67 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 4 }}>
				<Block variant="blue">33%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 8 }}>
				<Block variant="green">67%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const TwoColumn_50_50 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 6 }}>
				<Block variant="blue">50%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 6 }}>
				<Block variant="green">50%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const TwoColumn_67_33 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 8 }}>
				<Block variant="blue">67%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 4 }}>
				<Block variant="green">33%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const TwoColumn_75_25 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 9 }}>
				<Block variant="blue">75%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="green">25%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const ThreeColumn = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 4 }}>
				<Block variant="blue">Column 1</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 4 }}>
				<Block variant="green">Column 2</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 4 }}>
				<Block variant="orange">Column 3</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const ThreeColumn_25_50_25 = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="blue">25%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 6 }}>
				<Block variant="green">50%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="blue">25%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);

export const FourColumnEqual = () => (
	<Main>
		<Grid cols={{ base: 1, desktop: 12 }} gap={4} className="h-full">
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="blue">25%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="green">25%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="blue">25%</Block>
			</Grid.Item>
			<Grid.Item colSpan={{ base: 1, desktop: 3 }}>
				<Block variant="green">25%</Block>
			</Grid.Item>
		</Grid>
	</Main>
);
