import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

const blockVariants = cva("p-4 border rounded-lg text-center font-medium", {
	variants: {
		variant: {
			blue: "bg-blue-50 border-blue-300 text-blue-800",
			green: "bg-green-50 border-green-300 text-green-800",
			orange: "bg-orange-50 border-orange-300 text-orange-800",
			pink: "bg-pink-50 border-pink-300 text-pink-800",
			purple: "bg-purple-50 border-purple-300 text-purple-800",
			teal: "bg-teal-50 border-teal-300 text-teal-800",
			red: "bg-red-50 border-red-300 text-red-800",
			gray: "bg-gray-50 border-gray-300 text-gray-800",
		},
	},
	defaultVariants: {
		variant: "gray",
	},
});

type BlockProps = HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof blockVariants>;

function Block({ className, variant, ...props }: BlockProps) {
	return (
		<div className={clsx(blockVariants({ variant }), className)} {...props} />
	);
}

export default Block;
