import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";
import { Logo } from "@/components/header/Logo";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<HTMLElement>;
};
// eslint-disable-next-line import/prefer-default-export
export function HamburgerMenu({ buttonOnClick }: HamburgerMenuProps) {
	return (
		<div className="fixed top-0 z-50 h-screen w-full bg-white px-[20px] md:px-[32px] ">
			<div className="flex justify-between h-[60px]">
				<div className="flex items-center ">
					<Logo />
				</div>
				<div className="flex items-center lg:hidden">
					<HamburgerButton onClick={buttonOnClick} active />
				</div>
			</div>
			<ul className="flex h-full flex-col font-ss3 mt-4 gap-6 w-fit">
				<HeaderLinkList />
			</ul>
		</div>
	);
}
