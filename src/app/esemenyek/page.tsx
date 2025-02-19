import type { Metadata } from "next";

import { getEvents } from "@/utils/contentful";

import { EventCard } from "../../components/events/EventCard";

export const metadata: Metadata = {
	title: "Események | Magyar Biotechnológus-hallgatók Egyesülete",
};

export default async function EventsPage() {
	const events = await getEvents();
	return (
		<>
			<h1 className="mabe-h3b mb-[30px]">Események</h1>
			<section className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
				{events.items
					.slice(0)
					.reverse()
					.map((e) => (
						<EventCard key={e.sys.id} {...e.fields} />
					))}
			</section>
		</>
	);
}
