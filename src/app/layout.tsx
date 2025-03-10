import "../styles.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

const title = "Magyar Biotechnológus-hallgatók Egyesülete";
const description =
	"Az Egyesület célja, hogy a hazai biotechnológus-hallgatóknak egy olyan közösséget teremtsen, ahol megismerkedhetnek egymással és olyan kapcsolatokat alakíthatnak ki, amelyeket később az üzleti életben is kamatoztathatnak. ";
const defaultImage = {
	url: "/preview.png",
	width: 1200,
	height: 630,
	alt: "Magyar Biotechnológus-hallgatók Egyesülete",
};

export const viewport: Viewport = {
	colorScheme: "light",
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL("https://mbioteche.hu"),
	title,
	description,
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [defaultImage],
	},
	openGraph: {
		type: "website",
		title,
		description,
		images: [defaultImage],
	},
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="hu">
			{process.env.NODE_ENV === "production" && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					<Script id="google-analytics">
						{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
            });
			`}
					</Script>
				</>
			)}
			<body>
				<div className="flex min-h-screen flex-col font-ss3">
					<Header />
					<main className="flex-1 bg-[#fafafa]">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
