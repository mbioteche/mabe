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
		<>
			<button
				className="flex flex-col gap-[4px] hover:cursor-pointer p-2 mr-[-8px]"
				onClick={onClick}
				type="button"
			>
				{items.map((item) => (
					<div
						key={item}
						className={clsx(
							"w-[24px] h-[4px] rounded-[2px]",
							active ? "bg-[#00AB96]" : "bg-[#222222]",
						)}
					></div>
				))}
			</button>
		</>
	);
}
