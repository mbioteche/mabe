export default function AnyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container-mabe pb-[40px] pt-[30px] md:pt-[50px]">
			{children}
		</div>
	);
}
