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
		<article className="relative pt-[16px] pl-[16px]">
			<div className="flex flex-col h-full rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
				<div className=" w-full shrink-0  p-[6px]">
					<div className="w-full relative aspect-video rounded-[4px]">
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
				<div className="flex flex-1 flex-col justify-between px-[14px] pt-[10px] pb-[14px] gap-2">
					<div>
						<h2 className="mabe-h4sb mb-[4px]">{title}</h2>
						<div className="mabe-h5b text-[#00AB96] mb-[16px]">{location}</div>
						{miniContent && (
							<div className="mabe-h5 line-clamp-6">{miniContent}</div>
						)}
					</div>
					<Link
						href={`/esemenyek/${slug}`}
						className="flex items-center place-self-end self-end gap-[8px] rounded-[8px] px-[20px] py-[6px] text-[#fff] bg-[#00AB96] shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
					>
						<span className="mabe-h5sb">További részletek</span>
						<Image
							src={arrowRightLogo}
							className="w-[16px] h-[16px]"
							height={16}
							width={16}
							alt="Tovább olvasom ikon"
						/>
					</Link>
				</div>
			</div>
			<div className="absolute top-0 left-0">
				{startDate && endDate && (
					<div className="mabe-h5b text-white bg-[#00AB96] px-[16px] py-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
						{new Date(startDate || "").toLocaleDateString("hu")} -{" "}
						{new Date(endDate || "").toLocaleDateString("hu")}
					</div>
				)}
			</div>
		</article>
	);
}
