import clsx from "clsx";
import type { Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

import type { TypeMainPageEventSkeleton } from "@/@types/generated";
import arrowRightLogo from "@/assets/images/arrow_right.svg";

export function MainPageEventCard({
	title,
	location,
	endDate,
	startDate,
	image,
	link,
}: Entry<
	TypeMainPageEventSkeleton,
	"WITHOUT_UNRESOLVABLE_LINKS",
	string
>["fields"]) {
	return (
		<article className="main-page-events-card h-full relative pl-[15px] pt-[15px]">
			<div className="flex h-full flex-col rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
				<div className=" w-full shrink-0  p-[6px]">
					<div className="relative aspect-video w-full rounded-[4px]">
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
				</div>
				<div className="flex flex-1 flex-col justify-between gap-2 px-[14px] pb-[14px] pt-[10px]">
					<div>
						<h2 className="mabe-h6b mb-[4px]">{title}</h2>
						<div className="mabe-h6sb mb-[16px] text-[#00AB96]">{location}</div>
					</div>
					<Link
						href={link}
						target="_blank"
						className="flex items-center gap-[8px] place-self-end self-end rounded-[8px] bg-[#00AB96] px-[20px] py-[6px] text-[#fff] shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
					>
						<span className="mabe-h5sb">További részletek</span>
						<Image
							src={arrowRightLogo}
							className="size-[16px]"
							height={16}
							width={16}
							alt="Tovább olvasom ikon"
						/>
					</Link>
				</div>
			</div>
			<div className="absolute left-0 top-0">
				{startDate && (
					<div className="main-page-event-card-font bg-[#00AB96] px-[16px] py-[4px] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
						{new Date(startDate || "").toLocaleDateString("hu")}
						{endDate && (
							<> - {new Date(endDate || "").toLocaleDateString("hu")}</>
						)}
					</div>
				)}
			</div>
		</article>
	);
}
