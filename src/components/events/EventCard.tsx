import clsx from "clsx";
import type { Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

import type { TypeEventsSkeleton } from "@/@types/generated";
import arrowRightLogo from "@/assets/images/arrow_right.svg";

export function EventCard({
	title,
	location,
	miniContent,
	slug,
	endDate,
	startDate,
	image,
}: Entry<TypeEventsSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>["fields"]) {
	return (
		<article className="relative pl-[16px] pt-[16px]">
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
						<h2 className="mabe-h4sb mb-[4px]">{title}</h2>
						<div className="mabe-h5b mb-[16px] text-[#00AB96]">{location}</div>
						{miniContent && (
							<div className="mabe-h5 line-clamp-6">{miniContent}</div>
						)}
					</div>
					<Link
						href={`/esemenyek/${slug}`}
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
				{startDate && endDate && (
					<div className="mabe-h5b bg-[#00AB96] px-[16px] py-[4px] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
						{new Date(startDate || "").toLocaleDateString("hu")} -{" "}
						{new Date(endDate || "").toLocaleDateString("hu")}
					</div>
				)}
			</div>
		</article>
	);
}
