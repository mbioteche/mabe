import type { Entry } from "contentful";
import type { TypeMainPageOurGoalSkeleton } from "../../@types/generated";
import { OurGoalsCard } from "./OurGoalsCard";

export function OurGoalsSection({
	title,
	ourGoals,
}: {
	title: string;
	ourGoals: (
		| Entry<TypeMainPageOurGoalSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
		| undefined
	)[];
}) {
	function getEveryOddElement() {
		return ourGoals.filter((_, i) => i % 2 === 1);
	}

	function getEveryEvenElement() {
		return ourGoals.filter((_, i) => i % 2 === 0);
	}

	return (
		<div className="container-mabe flex flex-col gap-[30px] mb-[40px] lg:mb-[60px]">
			<h3 className="mabe-h3b">{title}</h3>

			<div className="hidden lg:grid grid-cols-2 gap-[30px]">
				<div className="flex flex-col gap-[40px]">
					{getEveryOddElement()
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal) => (
							<OurGoalsCard key={ourGoal?.sys.id} {...ourGoal?.fields} />
						))}
				</div>
				<div className="flex flex-col gap-[40px] pt-[80px]">
					{getEveryEvenElement()
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal) => (
							<OurGoalsCard key={ourGoal?.sys.id} {...ourGoal?.fields} />
						))}
				</div>
			</div>
			<div className="grid  grid-cols-1 lg:hidden">
				<div className="flex flex-col gap-[40px]">
					{ourGoals
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal) => (
							<OurGoalsCard key={ourGoal?.sys.id} {...ourGoal?.fields} />
						))}
				</div>
			</div>
		</div>
	);
}
