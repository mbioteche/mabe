"use client";

import { JoinUs3DButton } from "../buttons/JoinUs3DButton";

export function JoinUsSection({
	title,
	buttonLabel,
	link,
}: {
	title: string;
	buttonLabel: string;
	link: string;
}) {
	return (
		<div className="container-mabe mb-[40px] flex flex-col items-center gap-[24px] !px-[20px] py-[60px] lg:!px-[40px] lg:py-[80px] lg:gap-[32px] lg:mb-[60px]">
			<h3 className="mabe-h3b text-center w-[900px] max-w-full">{title}</h3>
			<JoinUs3DButton label={buttonLabel} joinLink={link} />
		</div>
	);
}
