"use client";

import type { Entry } from "contentful";
import { useEffect } from "react";

import type { TypeMainPageEventSkeleton } from "../../@types/generated";
import { MainPageEventCard } from "../events/MainPageEventCard";

export function MainPageEventsSection({
	title,
	events,
}: {
	title: string;
	events: (
		| Entry<TypeMainPageEventSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
		| undefined
	)[];
}) {
	let observer: IntersectionObserver;

	function applyObserver() {
		if (typeof document !== "undefined") {
			const cards = document.querySelectorAll(".main-page-events-card");

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						const tempEntry = entry;
						if (tempEntry.isIntersecting) {
							(tempEntry.target as any).style.animation =
								"appear 0.5s linear forwards";
						} else {
							(tempEntry.target as any).style.animation = "none";
						}
					});
				},
				{ threshold: 0.2 },
			);
			cards.forEach((card) => observer.observe(card));
		}
	}

	useEffect(() => {
		applyObserver();

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);

	if (events.length === 0) {
		return null;
	}

	return (
		<div className="container-mabe mb-[40px] flex flex-col gap-[30px] lg:mb-[60px]">
			<h3 className="mabe-h3b">{title}</h3>
			<div className="snap-scroll-container flex flex-row overflow-x-auto">
				{events
					.filter((event) => event !== undefined)
					.map((event, index) => (
						<div
							className="snap-scroll-item shrink-0 grow-0 basis-[100%] px-[15px] md:basis-1/2 xl:basis-1/3"
							key={(event?.sys.id ?? "") + index}
						>
							{event && <MainPageEventCard {...event.fields} />}
						</div>
					))}
			</div>
		</div>
	);
}

/* Type error: Type 
'{ title?: string | undefined; location?: string | undefined; image?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> | undefined; startDate?: `${number}-${number}-${number}T${number}:${number}:${number}Z` | undefined; endDate?: `${number}-${number}-${number}T${number}:${number}:${number}Z` | undefined; link?: string | u...'
'{ title: string; location: string; image: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> | undefined; startDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`; endDate?: `${number}-${number}-${number}T${number}:${number}:${number}Z` | undefined; link: string; }'. */
