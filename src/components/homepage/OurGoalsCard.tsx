import clsx from "clsx";
import type { Entry } from "contentful";
import Image from "next/image";

import type { TypeMainPageOurGoalSkeleton } from "@/@types/generated";

export function OurGoalsCard({
	title,
	image,
}: Entry<
	TypeMainPageOurGoalSkeleton,
	"WITHOUT_UNRESOLVABLE_LINKS",
	string
>["fields"]) {
	return (
		<article className="relative pl-[16px] pt-[16px]">
			<div className="relative aspect-[9/5] w-full  shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
				<Image
					src={
						image?.fields.file
							? `https:${image?.fields?.file?.url}`
							: "/missing_img.png"
					}
					className={clsx(
						"w-full rounded-[4px]",
						image ? "object-cover" : "object-contain",
					)}
					fill
					alt={`${title || "Esemény"} borítóképe`}
				/>
			</div>
			<div className="absolute left-0 top-0">
				{title && (
					<div className="mabe-h5b bg-[#00AB96] px-[16px] py-[4px] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
						{title}
					</div>
				)}
			</div>
		</article>
	);
}
