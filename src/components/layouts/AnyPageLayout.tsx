export default function AnyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="container-mabe pt-[50px] pb-[40px]">{children}</div>;
}
