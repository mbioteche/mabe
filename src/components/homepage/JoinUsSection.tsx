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
		<div className="container-mabe mb-[40px] flex flex-col items-center gap-[24px] !px-[20px] py-[60px] lg:mb-[60px] lg:gap-[32px] lg:!px-[40px] lg:py-[80px]">
			<h3 className="mabe-h3b w-[900px] max-w-full text-center">{title}</h3>
			<JoinUs3DButton label={buttonLabel} joinLink={link} />
		</div>
	);
}
