import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";
import { Logo } from "@/components/header/Logo";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<HTMLElement>;
	linkOnClick: React.MouseEventHandler<HTMLElement>;
};
// eslint-disable-next-line import/prefer-default-export
export function HamburgerMenu({
	buttonOnClick,
	linkOnClick,
}: HamburgerMenuProps) {
	return (
		<div className="fixed top-0 z-50 h-screen w-full bg-white px-[15px] md:px-[32px] ">
			<div className="flex h-[60px] justify-between">
				<div className="flex items-center ">
					<Logo />
				</div>
				<div className="flex items-center lg:hidden">
					<HamburgerButton onClick={buttonOnClick} active />
				</div>
			</div>
			<ul className="mt-4 flex h-full w-fit flex-col gap-6 font-ss3">
				<HeaderLinkList onClick={linkOnClick} />
			</ul>
		</div>
	);
}
