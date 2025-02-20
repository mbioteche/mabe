import { BottomSection } from "@/components/homepage/BottomSection";
import { Goals } from "@/components/homepage/Goals";
import { Hero } from "@/components/homepage/Hero";
import { JoinCard } from "@/components/homepage/JoinCard";
import { LinkIconsSection } from "@/components/homepage/LinkIconsSection";
import { MiddleSection } from "@/components/homepage/MiddleSection";
import { PartnersCard } from "@/components/homepage/PartnersCard";
import { getGeneralData, getMainPage } from "@/utils/contentful";

import { OurGoalsSection } from "../components/homepage/OurGoalsSection";

export default async function MainPage() {
	const generalData = await getGeneralData();
	const mainPageData = await getMainPage();

	const { title, subTitle, ourGouls, ourGoalsTitle } = mainPageData;

	return (
		<div className="overflow-hidden">
			<Hero title={title} subTitle={subTitle} />

			<OurGoalsSection title={ourGoalsTitle} ourGoals={ourGouls} />

			<Goals />
			<PartnersCard />
			<MiddleSection />
			<BottomSection />
			<LinkIconsSection />
			<JoinCard
				joinLink={
					generalData.fields.mabeformLink || "https://mbioteche.hu/hamarosan"
				}
			/>
		</div>
	);
}
