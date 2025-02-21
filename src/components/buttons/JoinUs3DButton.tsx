import { clsx } from "clsx";

type JoinUs3DButtonProps = {
	joinLink: string;
	label: string;
};

export function JoinUs3DButton({ joinLink, label }: JoinUs3DButtonProps) {
	const hoverClasses =
		"hover:shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-3px_1px_1px_#025C51] hover:brightness-[1.05]";
	const activeClasses =
		"active:shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-1px_2px_1px_#025C51] active:translate-y-[2px] active:mb-[2px] active:pb-[13px]  active:brightness-90";

	return (
		<a
			href={joinLink}
			target="_blank"
			rel="noopener noreferrer"
			className={clsx(
				"block rounded-[6px] bg-[#00AB96] px-[30px] pb-[15px] pt-[12px]",
				"shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_2px_1px_#025C51]",
				"transition-all duration-200 ease-in-out",
				hoverClasses,
				activeClasses,
			)}
		>
			<h3 className="mabe-h3b text-[#fff]">{label}</h3>
		</a>
	);
}
