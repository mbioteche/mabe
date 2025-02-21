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
				events={incomingEvents}
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
