import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import clsx from "clsx";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BackButton } from "@/components/buttons/BackButton";
import { NewsAuthor } from "@/components/news/NewsAuthor";
import { NewsCard } from "@/components/news/NewsCard";
import { getNews, getOneNews } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;

	const event = await getOneNews(slug);
	const { title, miniContent } = event.fields;

	const fullTitle = `${title} | Magyar Biotechnológus-hallgatók Egyesülete`;

	const coverImage = {
		url: `https:${event.fields?.coverImage?.fields.file?.url}`,
		width: 1200,
		height: 630,
		alt: title,
	};

	return {
		title: fullTitle,
		description: miniContent,
		openGraph: {
			type: "article",
			description: miniContent,
			title: fullTitle,
			images: [coverImage],
			publishedTime: event.fields.date,
		},
		twitter: {
			card: "summary_large_image",
			description: miniContent,
			title: fullTitle,
			images: [coverImage],
		},
	};
}

export default async function SelectedNewsPage({
	params,
}: {
	params: { slug: string };
}) {
	const allNews = await getNews();
	const suggestedNews = { ...allNews };
	const selectedNews = allNews.items.find(
		(e) => e.fields.slug === params?.slug,
	);

	if (!selectedNews) {
		notFound();
	}

	const sItems = suggestedNews.items
		.filter((item) => item !== selectedNews)
		.slice(0, 5)
		.sort(() => Math.random() - Math.random())
		.slice(0, 2);

	const { author, content, coverImage, date, title } = selectedNews.fields;

	return (
		<div className="mb-16 w-full">
			<div className="relative aspect-video w-full">
				<Image
					src={
						coverImage
							? `https:${coverImage?.fields?.file?.url}`
							: "/missing_img.png"
					}
					fill
					className={clsx(
						coverImage ? "object-cover" : "object-contain",
						"rounded-md lg:rounded-lg",
					)}
					alt={title}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw"
					priority
				/>
			</div>
			<div className="flex flex-col">
				<h1 className="my-8 font-ss3 text-xl font-bold xl:text-3xl">{title}</h1>
				<div className="prose mx-auto mb-10 lg:prose-xl">
					{documentToReactComponents(content, renderOptions)}
				</div>
				<BackButton href="/blog" />
			</div>
			{author && (
				<NewsAuthor
					name={author.fields.name}
					image={author.fields.image}
					desc={date}
					usedAsDate
				/>
			)}
			{sItems.length !== 0 && (
				<div className="my-16">
					<h3 className="mb-8 text-3xl italic ">További cikkek:</h3>
					<div className="grid grid-cols-1 gap-16 2xl:grid-cols-2">
						{sItems.map(({ fields }) => (
							<NewsCard key={fields.slug} {...fields} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export async function generateStaticParams() {
	const allNews = await getNews();

	return (
		allNews.items.map(({ fields }) => ({
			slug: fields.slug,
		})) ?? []
	);
}
