import { Hero } from "@/components/homepage/Hero";
import { getGeneralData, getMainPage } from "@/utils/contentful";

import { JoinUsSection } from "../components/homepage/JoinUsSection";
import { MainPageEventsSection } from "../components/homepage/MainPageEventsSection";
import { OurGoalsSection } from "../components/homepage/OurGoalsSection";

export default async function MainPage() {
	const generalData = await getGeneralData();
	const mainPageData = await getMainPage();

	const { mabeformLink } = generalData.fields;

	const {
		title,
		subTitle,
		ourGouls,
		ourGoalsTitle,
		joinUsText,
		joinUsButton,
		incomingEventsTitle,
		incomingEvents,
	} = mainPageData;

	const filteredIncomingEvents = incomingEvents
		.filter((event) => {
			if (event && event.fields) {
				const { startDate, endDate } = event.fields;
				if (endDate === undefined) {
					// start date should be later than the current date - 3 days
					const threeDaysBefore = new Date();
					threeDaysBefore.setDate(new Date().getDate() - 3);
					const eventDate = new Date(startDate);
					return eventDate >= threeDaysBefore;
				} 
					// end date should be later than the current date - 3 days
					const threeDaysBefore = new Date();
					threeDaysBefore.setDate(new Date().getDate() - 3);
					const eventDate = new Date(endDate);
					return eventDate >= threeDaysBefore;
				
			}
			return false;
		})
		.sort((a, b) => {
			if (a === undefined || b === undefined) {
				return -1;
			}
			if (a.fields.startDate && b.fields.startDate) {
				const dateA = new Date(a.fields.startDate);
				const dateB = new Date(b.fields.startDate);
				return dateA.getTime() - dateB.getTime();
			}
			return 0;
		});

	return (
		<div className="overflow-hidden">
			<Hero title={title} subTitle={subTitle} />
			<OurGoalsSection title={ourGoalsTitle} ourGoals={ourGouls} />
			<JoinUsSection
				title={joinUsText}
				buttonLabel={joinUsButton}
				link={mabeformLink}
			/>
			<MainPageEventsSection
				title={incomingEventsTitle}
				events={filteredIncomingEvents}
			/>

			{/* <Goals />
			<PartnersCard />
			<MiddleSection />
			<BottomSection />
			<LinkIconsSection />
			<JoinCard
				joinLink={
					generalData.fields.mabeformLink || "https://mbioteche.hu/hamarosan"
				}
			/> */}
		</div>
	);
}
