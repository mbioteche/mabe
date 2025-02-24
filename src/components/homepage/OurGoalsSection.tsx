"use client";

import type { Entry } from "contentful";

import { useEffect } from "react";
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
	let observer: IntersectionObserver;

	function applyObserver() {
		if (typeof document !== "undefined") {
			const cards = document.querySelectorAll(".our-goals-card");

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

	function getEveryOddElement() {
		return ourGoals.filter((_, i) => i % 2 === 1);
	}

	function getEveryEvenElement() {
		return ourGoals.filter((_, i) => i % 2 === 0);
	}

	return (
		<div className="container-mabe mb-[40px] flex flex-col gap-[30px] lg:mb-[60px]">
			<h3 className="mabe-h3b">{title}</h3>

			<div className="hidden grid-cols-2 gap-[30px] lg:grid">
				<div className="flex flex-col gap-[40px]">
					{getEveryOddElement()
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal, index) => (
							<OurGoalsCard
								key={(ourGoal?.sys.id ?? "") + index}
								{...ourGoal?.fields}
							/>
						))}
				</div>
				<div className="flex flex-col gap-[40px] pt-[80px]">
					{getEveryEvenElement()
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal, index) => (
							<OurGoalsCard
								key={(ourGoal?.sys.id ?? "") + index}
								{...ourGoal?.fields}
							/>
						))}
				</div>
			</div>
			<div className="grid  grid-cols-1 lg:hidden">
				<div className="flex flex-col gap-[40px]">
					{ourGoals
						.filter((ourGoal) => ourGoal !== undefined)
						.map((ourGoal, index) => (
							<OurGoalsCard
								key={(ourGoal?.sys.id ?? "") + index}
								{...ourGoal?.fields}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
