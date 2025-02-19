import Image from "next/image";

import mabewhitelogo from "@/assets/images/mabe-logo-white.svg";
import { getNewFooter } from "@/utils/contentful";

import { FooterLinkGroup } from "./FooterLinkGroup";

// eslint-disable-next-line import/prefer-default-export
export async function Footer() {
	const footerData = await getNewFooter();

	const { linkGroups } = footerData.fields;

	return (
		<footer className="w-full bg-[#444] pb-[40px] pt-[30px] sm:pb-[60px] sm:pt-[40px]">
				<div className="container-mabe">
					<div className="flex w-full flex-col items-center justify-between gap-[30px] md:gap-[40px] lg:flex-row xl:gap-[60px]">
						<div className="h-[60px] w-[159px] lg:h-[80px] lg:w-[212px]">
							<Image
								src={mabewhitelogo}
								alt="mabe white text logo"
								className="size-full"
							/>
						</div>
						{linkGroups && (
							<div className="flex w-full flex-col gap-[30px] px-[10px] md:w-auto md:flex-row md:gap-[40px] md:px-0 xl:gap-[60px]">
								{linkGroups.map((linkGroup, index) => (
									<FooterLinkGroup key={index} footerLinkGroup={linkGroup} />
								))}
							</div>
						)}
					</div>
				</div>
			</footer>
	);
}
