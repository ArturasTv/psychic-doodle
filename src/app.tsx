import Block from "./components/ui/block";
import { Grid } from "./components/ui/grid";

function App() {
	return (
		<div className="p-5">
			<h1 className="text-2xl font-bold mb-6">CSS Grid System Example</h1>

			<Grid
				className="mb-5 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
				gap={4}
			>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="blue">Column 1 (4/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="green">Column 2 (4/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="orange">Column 3 (4/12)</Block>
				</Grid.Item>
			</Grid>

			<Grid
				className="mb-5 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
			>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="blue">Column 1 (4/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="green">Column 2 (4/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 4 }}>
					<Block variant="orange">Column 3 (4/12)</Block>
				</Grid.Item>
			</Grid>

			<Grid
				className="mb-5 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
			>
				<Grid.Item colSpan={{ tablet: 6 }}>
					<Block variant="pink">Wide Column (6/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 3 }}>
					<Block variant="purple">Medium (3/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 3 }}>
					<Block variant="teal">Medium (3/12)</Block>
				</Grid.Item>
			</Grid>

			<Grid
				className="mb-5 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
			>
				<Grid.Item colSpan={{ tablet: 12 }}>
					<Block variant="red">Full Width Column (12/12)</Block>
				</Grid.Item>
			</Grid>

			<h2 className="text-xl font-semibold mb-4 mt-8">Nested Grid Example</h2>

			<Grid
				className="p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
				gap={4}
			>
				<Grid.Item colSpan={{ tablet: 8 }}>
					<Block variant="blue" className="mb-4">
						Main Content Area (8/12)
					</Block>

					{/* Nested grid: also stack on mobile */}
					<Grid cols={{ base: 1, tablet: 12 }} gap={{ base: 2, tablet: 2 }}>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="green">Nested Col 1 (6/12)</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="orange">Nested Col 2 (6/12)</Block>
						</Grid.Item>
					</Grid>

					<Grid
						cols={{ base: 1, tablet: 12 }}
						gap={{ base: 2, tablet: 2 }}
						className="mt-2"
					>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="purple">Nested (4/12)</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="teal">Nested (4/12)</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="pink">Nested (4/12)</Block>
						</Grid.Item>
					</Grid>
				</Grid.Item>

				<Grid.Item colSpan={{ tablet: 4 }}>
					<Grid
						className=" bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gap={4}
					>
						<Grid.Item colSpan={{ tablet: 8 }}>
							<Block variant="blue" className="mb-4">
								Main Content Area (8/12)
							</Block>

							{/* Nested grid: also stack on mobile */}
							<Grid cols={{ base: 1, tablet: 12 }} gap={{ base: 2, tablet: 2 }}>
								<Grid.Item colSpan={{ tablet: 6 }}>
									<Block variant="green">Nested Col 1 (6/12)</Block>
								</Grid.Item>
								<Grid.Item colSpan={{ tablet: 6 }}>
									<Block variant="orange">Nested Col 2 (6/12)</Block>
								</Grid.Item>
							</Grid>

							<Grid
								cols={{ base: 1, tablet: 12 }}
								gap={{ base: 2, tablet: 2 }}
								className="mt-2"
							>
								<Grid.Item colSpan={{ tablet: 4 }}>
									<Block variant="purple">Nested (4/12)</Block>
								</Grid.Item>
								<Grid.Item colSpan={{ tablet: 4 }}>
									<Block variant="teal">Nested (4/12)</Block>
								</Grid.Item>
								<Grid.Item colSpan={{ tablet: 4 }}>
									<Block variant="pink">Nested (4/12)</Block>
								</Grid.Item>
							</Grid>
						</Grid.Item>

						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="gray" className="h-full">
								Sidebar (4/12)
							</Block>
						</Grid.Item>
					</Grid>
				</Grid.Item>
			</Grid>

			<h2 className="text-xl font-semibold mb-4 mt-8">
				Centered Single Item Example
			</h2>

			{/* On mobile it’s full-width; from md we center via colStart */}
			<Grid className="p-3 bg-gray-100 rounded" cols={{ base: 1, tablet: 12 }}>
				<Grid.Item colSpan={{ tablet: 6 }} colStart={{ tablet: 4 }}>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
					>
						<Grid.Item colSpan={{ tablet: 6 }} colStart={{ tablet: 4 }}>
							<Block variant="blue">Centered Content (6/12)</Block>
						</Grid.Item>
					</Grid>
				</Grid.Item>
			</Grid>

			<Grid
				className="mt-4 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
			>
				<Grid.Item colSpan={{ tablet: 4 }} colStart={{ tablet: 5 }}>
					<Block variant="green">Centered Smaller (4/12)</Block>
				</Grid.Item>
			</Grid>

			<Grid
				className="mt-4 p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
			>
				<Grid.Item colSpan={{ tablet: 12 }}>
					<Block className="w-4/12 mx-auto" variant="purple">
						Very Small Centered ( 4/12)
					</Block>
				</Grid.Item>
			</Grid>

			<h3 className="text-lg font-medium mb-3 mt-6">
				Centered 3 Columns Example
			</h3>

			<Grid
				className="p-3 bg-gray-100 rounded"
				cols={{ base: 1, tablet: 12 }}
				gap={{ base: 2, tablet: 4 }}
			>
				<Grid.Item colSpan={{ tablet: 2 }} colStart={{ tablet: 4 }}>
					<Block variant="blue">Col 1 (2/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 2 }} colStart={{ tablet: 6 }}>
					<Block variant="green">Col 2 (2/12)</Block>
				</Grid.Item>
				<Grid.Item colSpan={{ tablet: 2 }} colStart={{ tablet: 8 }}>
					<Block variant="orange">Col 3 (2/12)</Block>
				</Grid.Item>
			</Grid>

			<h3 className="text-lg font-medium mb-3 mt-6">Gap Examples</h3>

			<div className="space-y-4">
				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						No Gap (gap=0)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gap={0}
					>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="blue">No Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="green">No Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="orange">No Gap</Block>
						</Grid.Item>
					</Grid>
				</div>

				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						Small Gap (gap=2)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gap={2}
					>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="pink">Small Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="purple">Small Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="teal">Small Gap</Block>
						</Grid.Item>
					</Grid>
				</div>

				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						Large Gap (gap=6)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gap={6}
					>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="red">Large Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="blue">Large Gap</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="green">Large Gap</Block>
						</Grid.Item>
					</Grid>
				</div>

				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						Horizontal Only (gapX=4)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gapX={4}
					>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="orange">H-Gap Only</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="pink">H-Gap Only</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 4 }}>
							<Block variant="purple">H-Gap Only</Block>
						</Grid.Item>
					</Grid>
				</div>

				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						Vertical Only (gapY=4)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
						gapY={4}
					>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="teal">V-Gap Only</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="blue">V-Gap Only</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="green">V-Gap Only</Block>
						</Grid.Item>
						<Grid.Item colSpan={{ tablet: 6 }}>
							<Block variant="red">V-Gap Only</Block>
						</Grid.Item>
					</Grid>
				</div>

				<div>
					<h4 className="text-sm font-medium mb-2 text-gray-600">
						Column Positioning (start/end)
					</h4>
					<Grid
						className="p-3 bg-gray-100 rounded"
						cols={{ base: 1, tablet: 12 }}
					>
						{/* On mobile these just stack; from md they position */}
						<Grid.Item colStart={{ tablet: 2 }} colEnd={{ tablet: 6 }}>
							<Block variant="blue">Positioned Col (2-6)</Block>
						</Grid.Item>
						<Grid.Item colStart={{ tablet: 8 }} colEnd={{ tablet: 12 }}>
							<Block variant="green">Positioned Col (8-12)</Block>
						</Grid.Item>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default App;
