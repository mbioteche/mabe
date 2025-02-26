import clsx from "clsx";

type HeaderHamburgerButtonProps = {
	onClick: React.MouseEventHandler<HTMLElement>;
	active?: boolean;
};
// eslint-disable-next-line import/prefer-default-export
export function HamburgerButton({
	onClick,
	active,
}: HeaderHamburgerButtonProps) {
	const items = [1, 2, 3];
	return (
		<button
			className="mr-[-8px] flex flex-col gap-[4px] p-2 hover:cursor-pointer"
			onClick={onClick}
			type="button"
		>
			{items.map((item) => (
				<div
					key={item}
					className={clsx(
						"h-[4px] w-[24px] rounded-[2px] ",
						active ? "bg-[#00AB96]" : "bg-[#222222]",
					)}
				/>
			))}
		</button>
	);
}
