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
				linkOnClick={() => {
					if (isNavbarOpen) {
						setNavbarOpen(false);
					}
				}}
			/>
		);
	}

	return (
		<div className="sticky top-0 z-40 w-full bg-white font-ss3 text-gray shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] ">
			<div className="container-mabe-fluid container-mabe-lg flex h-[60px] flex-row items-center justify-between align-middle">
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
		</div>
	);
}
