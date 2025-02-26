import { clsx } from "clsx";
import type { Entry } from "contentful";

import type { TypeFooterLinkGroupSkeleton } from "../../@types/generated";
import { FooterLink } from "./FooterLink";

type FooterLinkGroupProps = {
	footerLinkGroup:
		| Entry<TypeFooterLinkGroupSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
		| undefined;
};

// eslint-disable-next-line import/prefer-default-export
export async function FooterLinkGroup({
	footerLinkGroup,
}: FooterLinkGroupProps) {
	if (footerLinkGroup === undefined) {
		return null;
	}

	const { fields } = footerLinkGroup;
	const { title, links, textLinks } = fields;

	return (
		<div className="flex w-full flex-col gap-2 md:w-[180px] lg:w-[200px]">
			<p className="mabe-h5sb text-[#fafafa]">{title}</p>
			<div className="h-[1px] w-full bg-[#fafafa]" />
			<div
				className={clsx(
					textLinks
						? "flex flex-col gap-[2px]"
						: "flex flex-row flex-wrap gap-4",
				)}
			>
				{links && (
					<>
						{links.map((link, index) => (
							<FooterLink link={link} key={index} />
						))}
					</>
				)}
			</div>
		</div>
	);
}
