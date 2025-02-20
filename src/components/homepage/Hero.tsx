import mabeLogoSectionGreen from "@/assets/images/mabe-logo-section-green.svg";
import mabeLogoSectionRed from "@/assets/images/mabe-logo-section-red.svg";
import mabeLogoSymbol from "@/assets/images/mabe-logo-symbol.svg";
import Image from "next/image";

export function Hero({ title, subTitle }: { title: string; subTitle: string }) {
	return (
		<div className="container-mabe relative py-[100px] md:py-[120px] lg:py-[180px]">
			<div className="hidden lg:block absolute w-[550px] h-[300px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-[690px]">
				<Image src={mabeLogoSymbol} fill alt="MABE logo" />
			</div>
			<div className="hidden lg:block absolute w-[550px] h-[300px] top-1/2 -translate-y-1/2 right-1/2 translate-x-[690px] rotate-180">
				<Image src={mabeLogoSymbol} fill alt="MABE logo" />
			</div>

			<div className="lg:hidden absolute w-full max-w-[calc(100%-20px)] md:max-w-[calc(100%-80px)] top-[20px]  left-1/2 -translate-x-1/2 aspect-[59/13]">
				<Image src={mabeLogoSectionRed} fill alt="MABE logo" />
			</div>
			<div className="lg:hidden absolute w-full max-w-[calc(100%-20px)] md:max-w-[calc(100%-80px)] bottom-[20px] right-1/2 translate-x-1/2 aspect-[59/13]">
				<Image src={mabeLogoSectionGreen} fill alt="MABE logo" />
			</div>

			<div className="w-full flex flex-col items-center">
				<div className="w-fit h-fit  py-[20px] relative flex flex-col gap-[10px]">
					<div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-[#fafafa] z-10 rounded-[30px] blur-[10px]"></div>
					<h1 className="mabe-h1 text-center z-20">{title}</h1>
					<h3 className="mabe-h3 text-center z-20 lg:whitespace-pre-line">
						{subTitle}
					</h3>
				</div>
			</div>
		</div>
	);
}
