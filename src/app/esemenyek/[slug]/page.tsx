import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import clsx from "clsx";
import type { Metadata } from "next";
import Image from "next/image";

import arrowRightLogo from "@/assets/images/arrow_right.svg";
import { getEvent, getEvents } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";
import Link from "next/link";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;

	const event = await getEvent(slug);
	const { title, miniContent, image } = event.fields;

	const fullTitle = `${title} | Magyar Biotechnológus-hallgatók Egyesülete`;

	const coverImage = {
		url: `https:${image?.fields?.file?.url}`,
		width: 1200,
		height: 630,
		alt: title,
	};

	return {
		title: fullTitle,
		description: miniContent,
		openGraph: {
			type: "website",
			description: miniContent,
			title: fullTitle,
			images: [coverImage],
		},
		twitter: {
			card: "summary_large_image",
			description: miniContent,
			title: fullTitle,
			images: [coverImage],
		},
	};
}

export default async function EventsPage({ params }: Props) {
	const event = await getEvent(params.slug);
	const { image, location, longContent, title, endDate, startDate } =
		event.fields;
	return (
		<article className="event-details-page">
			<div className="relative aspect-video w-full">
				<Image
					src={image ? `https:${image?.fields?.file?.url}` : "/missing_img.png"}
					className={clsx("w-full", image ? "object-cover" : "object-contain")}
					fill
					alt={title}
				/>
			</div>
			<div className="mt-[30px] lg:mt-[40px] flex flex-col pb-6">
				<div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start 2xl:flex-row 2xl:items-center 2xl:justify-between">
					<h2 className="mb-3 mabe-h1 md:mb-0 lg:mb-3 xl:mb-0">{title}</h2>
					{startDate && endDate && (
						<div className="min-w-[30%] mabe-h2  font-normal ">
							{new Date(startDate).toLocaleDateString("hu")} -{" "}
							{new Date(endDate).toLocaleDateString("hu")}
						</div>
					)}
				</div>
				<div className="mb-10 mabe-h2 font-bold text-[#00AB96] ">
					{location}
				</div>
				<div className="prose mb-10 max-w-none lg:prose-xl leading-[24px]">
					{documentToReactComponents(longContent, renderOptions)}
				</div>
				<Link
					href={`/esemenyek`}
					className="flex items-center gap-[8px] self-start rounded-[8px] bg-[#00AB96] px-[20px] py-[6px] text-[#fff] shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
				>
					<Image
						src={arrowRightLogo}
						className="size-[16px] rotate-180"
						height={16}
						width={16}
						alt="Tovább olvasom ikon"
					/>
					<span className="mabe-h5sb">Vissza</span>
				</Link>
			</div>
		</article>
	);
}

export async function generateStaticParams() {
	const events = await getEvents();

	return (
		events.items.map(({ fields }) => ({
			slug: fields.slug,
		})) ?? []
	);
}
