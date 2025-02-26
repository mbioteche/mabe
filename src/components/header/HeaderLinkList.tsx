import { HeaderLink } from "@/components/header/HeaderLink";
import { JoinUsButton } from "@/components/header/JoinUsButton";

type HeaderLinkListProps = {
	onClick?: React.MouseEventHandler<HTMLElement>;
};

export function HeaderLinkList({ onClick }: HeaderLinkListProps) {
	return (
		<>
			<HeaderLink text="Kezdőlap" href="/" onClick={onClick} />
			<HeaderLink text="Csapatunk" href="/csapatunk" onClick={onClick} />
			<HeaderLink text="Események" href="/esemenyek" onClick={onClick} />
			<HeaderLink text="Dokumentumok" href="/dokumentumok" onClick={onClick} />
			<JoinUsButton isHeader link="https://forms.gle/uu4v3S8HJsCEFghc7" />
		</>
	);
}
