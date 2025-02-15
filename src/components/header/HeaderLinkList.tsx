import { HeaderLink } from "@/components/header/HeaderLink";
import { JoinUsButton } from "@/components/header/JoinUsButton";

export function HeaderLinkList() {
	return (
		<>
			<HeaderLink text="Kezdőlap" href="/" />
			<HeaderLink text="Csapatunk" href="/csapatunk" />
			<HeaderLink text="Események" href="/esemenyek" />
			<HeaderLink text="Dokumentumok" href="/dokumentumok" />
			<JoinUsButton
				isHeader={true}
				link="https://forms.gle/uu4v3S8HJsCEFghc7"
			/>
		</>
	);
}
