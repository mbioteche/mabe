import Image from "next/image";

import mabewhitelogo from "@/assets/images/mabe-logo-white.svg";
import { getNewFooter } from "@/utils/contentful";
import { FooterLinkGroup } from "./FooterLinkGroup";

// eslint-disable-next-line import/prefer-default-export
export async function Footer() {
	const footerData = await getNewFooter();

	const { linkGroups } = footerData.fields;

	return (
		<>
			<footer className="w-full bg-[#444] pt-[30px] pb-[40px] sm:pt-[40px] sm:pb-[60px]">
				<div className="container-mabe">
					<div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[30px] md:gap-[40px] xl:gap-[60px]">
						<div className="h-[60px] lg:h-[80px] w-[159px] lg:w-[212px]">
							<Image
								src={mabewhitelogo}
								alt="mabe white text logo"
								className="size-full"
							/>
						</div>
						{linkGroups && (
							<div className="flex flex-col md:flex-row w-full md:w-auto px-[10px] md:px-0 gap-[30px] md:gap-[40px] xl:gap-[60px]">
								{linkGroups.map((linkGroup, index) => (
									<FooterLinkGroup key={index} footerLinkGroup={linkGroup} />
								))}
							</div>
						)}
					</div>
				</div>
			</footer>
		</>
	);
}
