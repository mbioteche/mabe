import Image from "next/image";

import mabeLogoSectionGreen from "@/assets/images/mabe-logo-section-green.svg";
import mabeLogoSectionRed from "@/assets/images/mabe-logo-section-red.svg";
import mabeLogoSymbol from "@/assets/images/mabe-logo-symbol.svg";

export function Hero({ title, subTitle }: { title: string; subTitle: string }) {
	return (
		<div className="container-mabe relative py-[100px] md:py-[120px] lg:py-[180px] mb-[40px] lg:mb-[60px]">
			<div className="absolute left-1/2 top-1/2 hidden h-[300px] w-[550px] -translate-x-[690px] -translate-y-1/2 lg:block">
				<Image src={mabeLogoSymbol} fill alt="MABE logo" />
			</div>
			<div className="absolute right-1/2 top-1/2 hidden h-[300px] w-[550px] -translate-y-1/2 translate-x-[690px] rotate-180 lg:block">
				<Image src={mabeLogoSymbol} fill alt="MABE logo" />
			</div>

			<div className="absolute left-1/2 top-[20px] aspect-[59/13] w-full max-w-[calc(100%-20px)]  -translate-x-1/2 md:max-w-[calc(100%-80px)] lg:hidden">
				<Image src={mabeLogoSectionRed} fill alt="MABE logo" />
			</div>
			<div className="absolute bottom-[20px] right-1/2 aspect-[59/13] w-full max-w-[calc(100%-20px)] translate-x-1/2 md:max-w-[calc(100%-80px)] lg:hidden">
				<Image src={mabeLogoSectionGreen} fill alt="MABE logo" />
			</div>

			<div className="flex w-full flex-col items-center">
				<div className="relative flex  size-fit flex-col gap-[10px] py-[20px]">
					<div className="absolute inset-0 z-10 size-full rounded-[30px] bg-[#fafafa] blur-[10px]" />
					<h1 className="mabe-h1 z-20 text-center">{title}</h1>
					<h3 className="mabe-h3 z-20 text-center lg:whitespace-pre-line">
						{subTitle}
					</h3>
				</div>
			</div>
		</div>
	);
}
