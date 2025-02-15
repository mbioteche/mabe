"use client";

import Router from "next/router";
import React, { useMemo } from "react";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HamburgerMenu } from "@/components/header/HamburgerMenu";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";
import { Logo } from "@/components/header/Logo";

// eslint-disable-next-line import/prefer-default-export
export function Header() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);

	Router.events.on("routeChangeStart", () => {
		setNavbarOpen(false);
	});

	useMemo(() => {
		setNavbarOpen(false);
	}, []);

	if (isNavbarOpen) {
		return (
			<HamburgerMenu
				buttonOnClick={() => {
					setNavbarOpen(!isNavbarOpen);
				}}
			/>
		);
	}

	return (
		<div className="sticky top-0 z-40 grid h-[60px] w-full grid-cols-2 items-center bg-white px-[20px] align-middle font-ss3 text-gray shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] md:px-[32px] lg:flex lg:flex-row lg:justify-center lg:space-x-16 lg:px-16 lg:py-0">
			<div className="flex items-center ">
				<Logo />
			</div>

			<nav className="hidden lg:block">
				<ul className="flex flex-row items-center space-x-[28px]">
					<HeaderLinkList />
				</ul>
			</nav>

			<div className="flex items-center justify-end lg:hidden">
				<HamburgerButton
					onClick={() => {
						setNavbarOpen(!isNavbarOpen);
					}}
				/>
			</div>
		</div>
	);
}
